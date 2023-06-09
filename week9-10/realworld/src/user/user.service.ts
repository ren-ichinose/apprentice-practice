import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import UserResponse from 'src/auth/interfaces/auth.interface';
import UserDTO from '../auth/dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userDto: UserDTO): Promise<UserResponse> {
    const { username, email, password } = userDto;

    /* eslint-disable @typescript-eslint/naming-convention */

    const {
      id,
      password: createdPassword,
      created_at,
      updated_at,
      ...rest
    } = await this.prisma.user.create({
      data: { username, email, password },
    });

    /* eslint-enable */

    return rest;
  }
}
