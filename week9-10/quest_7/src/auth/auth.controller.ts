import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import AuthDto from './dto/auth.dto';
import AuthService from './auth.service';
import { User } from './interfaces/auth.interface';

@Controller('users')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signUp(@Body('user') authDto: AuthDto): Promise<{ user: User }> {
    const user = await this.authService.signUp(authDto);
    return { user };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body('user') authDto: AuthDto): Promise<{ user: User }> {
    const user = await this.authService.login(authDto);
    return { user };
  }
}
