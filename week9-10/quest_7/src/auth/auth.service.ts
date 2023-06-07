import { ForbiddenException, Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import UserService from 'src/user/user.service';
import AuthDto from './dto/auth.dto';
import { User } from './interfaces/auth.interface';

@Injectable()
export default class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(authDto: AuthDto): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { email, password } = authDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      await this.prisma.users.create({
        data: {
          email,
          password_digest: hashedPassword,
        },
      });

      const user = { email, token: null };
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new Error('Email already exists');
        }
      }
      throw new Error('Something went wrong');
    }
  }

  async login(authDto: AuthDto): Promise<User> {
    const { email, password } = authDto;
    const findedUser = await this.userService.findOne(email);
    if (!findedUser)
      throw new ForbiddenException('Email or Password incorrect');

    const isValid = await bcrypt.compare(password, findedUser.password_digest);
    if (!isValid) throw new ForbiddenException('Email or Password incorrect');

    const token = await this.generateJWT(findedUser.id, findedUser.email);
    const user = { email, token };

    return user;
  }

  async generateJWT(userId: number, email: string): Promise<string> {
    const payload = { sub: userId, email };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}
