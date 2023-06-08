import { Injectable } from '@nestjs/common';
import { Users, Prisma } from '@prisma/client';
import PrismaService from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(email: string, password: string): Promise<Users> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const user = await this.prisma.users.create({
        data: {
          email,
          password_digest: hashedPassword,
        },
      });
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

  async findOne(email: string): Promise<Users | null> {
    const result = await this.prisma.users.findUnique({
      where: { email },
    });
    return result;
  }
}
