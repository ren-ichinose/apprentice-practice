import { Body, Controller, Post } from '@nestjs/common';
import UserDTO from './dto/user.dto';
import UserResponse from './interfaces/auth.interface';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('users')
  async sign(@Body('user') userDto: UserDTO): Promise<{ user: UserResponse }> {
    const user = await this.authService.signUp(userDto);
    return { user };
  }
}
