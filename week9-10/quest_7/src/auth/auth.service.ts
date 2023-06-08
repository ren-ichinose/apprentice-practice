import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import UserService from 'src/user/user.service';
import AuthDto from './dto/auth.dto';
import { User } from './interfaces/auth.interface';

@Injectable()
export default class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(authDto: AuthDto): Promise<User> {
    const { email, password } = authDto;
    const user = await this.userService.create(email, password);
    return { email: user.email, token: null };
  }

  async login(authDto: AuthDto): Promise<User> {
    const { email, password } = authDto;
    const findedUser = await this.userService.findOne(email);
    if (!findedUser)
      throw new ForbiddenException('Email or Password incorrect');

    const isValid = await bcrypt.compare(password, findedUser.password_digest);
    if (!isValid) throw new ForbiddenException('Email or Password incorrect');

    const token = await this.generateJwt(findedUser.id, findedUser.email);
    const user = { email: findedUser.email, token };

    return user;
  }

  async generateJwt(userId: number, email: string): Promise<string> {
    const payload = { sub: userId, email };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}
