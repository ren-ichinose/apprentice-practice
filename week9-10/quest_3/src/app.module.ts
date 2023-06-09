import { Module } from '@nestjs/common';
import PrismaModule from './prisma/prisma.module';
import TodoModule from './todo/todo.module';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [TodoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
