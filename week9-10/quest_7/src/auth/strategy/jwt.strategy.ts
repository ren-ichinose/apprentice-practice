import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import UserService from 'src/user/user.service';
import removeTimestamps from 'utils/removeTimestamps';
import { User } from '../interfaces/auth.interface';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET'),
    });
  }

  async validate({ email }: { email: string }): Promise<User> {
    const findedUser = await this.userService.findOne(email);
    if (!findedUser) throw new UnauthorizedException();

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { password_digest, ...rest } = findedUser;
    return removeTimestamps(rest);
  }
}
