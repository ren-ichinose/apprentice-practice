import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import UserDTO from './dto/user.dto';
import UserResponse from './interfaces/auth.interface';
import AuthDto from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(userDto: UserDTO): Promise<UserResponse> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const crestedUser = await this.userService.create(userDto);
    const user = { ...crestedUser, token: null };
    return user;
  }

  async login(authDto: AuthDto): Promise<UserResponse> {
    const findedUser = await this.userService.getByEmail(authDto.email);
    if (!findedUser)
      throw new UnauthorizedException(
        'ユーザー名またはパスワードを確認してください',
      );

    const isValid = await bcrypt.compare(authDto.password, findedUser.password);
    if (!isValid)
      throw new UnauthorizedException(
        'ユーザー名またはパスワードを確認してください',
      );

    const { id, username, email, bio, image } = findedUser;
    const user = {
      username,
      email,
      token: await this.generateJWT(id, email, username),
      bio,
      image,
    };

    return user;
  }

  protected async generateJWT(
    id: number,
    email: string,
    username: string,
  ): Promise<string> {
    const payload = { sub: id, email, username };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}
