import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import PrismaService from 'src/prisma/prisma.service';

@Injectable()
export default class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(email: string): Promise<Users | null> {
    const result = this.prisma.users.findUnique({
      where: { email },
    });
    return result;
  }
}
