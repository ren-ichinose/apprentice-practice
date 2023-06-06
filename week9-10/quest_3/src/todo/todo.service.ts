import { BadRequestException, Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';
import { Todos } from '@prisma/client';
import CreateTodoDto from './dto/create-todo.dto';
import UpdateTodoDto from './dto/update-todo.dto copy';

@Injectable()
export default class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Todos[]> {
    const result = await this.prisma.todos.findMany({
      orderBy: { created_at: 'desc' },
    });
    return result;
  }

  async getById(id: number): Promise<Todos> {
    const todoItem = await this.prisma.todos.findFirst({ where: { id } });
    if (!todoItem) throw new BadRequestException('Todo item not found');
    return todoItem;
  }

  async create(createTodoDto: CreateTodoDto): Promise<void> {
    await this.prisma.todos.create({ data: createTodoDto });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<void> {
    const { title } = updateTodoDto;
    await this.prisma.todos.update({ where: { id }, data: { title } });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.todos.delete({ where: { id } });
  }
}
