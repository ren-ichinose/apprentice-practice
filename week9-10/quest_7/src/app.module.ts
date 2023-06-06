import { Module } from '@nestjs/common';
import PrismaModule from './prisma/prisma.module';
import TodosModule from './todos/todos.module';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [PrismaModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
