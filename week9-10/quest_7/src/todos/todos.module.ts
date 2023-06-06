import { Module } from '@nestjs/common';
import PrismaModule from 'src/prisma/prisma.module';
import TodosService from './todos.service';
import TodosController from './todos.controller';

@Module({
  imports: [PrismaModule],
  providers: [TodosService],
  controllers: [TodosController],
})
export default class TodosModule {}
