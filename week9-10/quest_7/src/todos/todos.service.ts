import { Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';
import removeTimestamps from 'src/utils/removeTimestamps';
import Todo from './interfaces/todo.interfaces';
import TodoDto from './dto/todo.dto';

@Injectable()
export default class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Todo[]> {
    const todos = await this.prisma.todos.findMany({
      orderBy: { created_at: 'desc' },
    });
    return removeTimestamps(todos);
  }

  async create(todoDto: TodoDto): Promise<Todo> {
    const todo = await this.prisma.todos.create({
      data: todoDto,
    });

    return removeTimestamps(todo);
  }

  async update(id: number, todoDto: TodoDto): Promise<Todo> {
    const todo = await this.prisma.todos.update({
      where: { id },
      data: todoDto,
    });
    return removeTimestamps(todo);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.todos.delete({
      where: { id },
    });
  }
}
