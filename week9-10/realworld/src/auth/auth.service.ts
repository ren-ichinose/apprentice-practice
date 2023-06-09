import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import UserDTO from './dto/user.dto';
import UserResponse from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUp(userDto: UserDTO): Promise<UserResponse> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const user = await this.userService.create(userDto);
    return user;
  }
}
