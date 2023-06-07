import { Module } from '@nestjs/common';
import PrismaModule from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import UserModule from 'src/user/user.module';
import AuthController from './auth.controller';
import AuthService from './auth.service';
import JwtStrategy from './strategy/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy],
})
export default class AuthModule {}
