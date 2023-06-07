import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AuthModule from './auth/auth.module';
import UserModule from './user/user.module';
import PrismaModule from './prisma/prisma.module';
import TodosModule from './todos/todos.module';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [
    PrismaModule,
    TodosModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
