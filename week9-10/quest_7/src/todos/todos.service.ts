import { Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';
import removeTimestamps from 'utils/removeTimestamps';
import CreateTodoDto from './dto/create-todo.dto';
import Todo from './interfaces/todo.interfaces';

@Injectable()
export default class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Todo[]> {
    const todos = await this.prisma.todos.findMany({
      orderBy: { created_at: 'desc' },
    });
    return removeTimestamps(todos);
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todos = await this.prisma.todos.create({
      data: createTodoDto,
    });

    return removeTimestamps(todos);
  }

  async update(id: number, updateTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = await this.prisma.todos.update({
      where: { id },
      data: updateTodoDto,
    });
    return removeTimestamps(todo);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.todos.delete({
      where: { id },
    });
  }
}
