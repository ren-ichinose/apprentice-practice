import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import TodosService from './todos.service';
import CreateTodoDto from './dto/create-todo.dto';
import UpdateTodoDto from './dto/update-todo.dto';
import Todo from './interfaces/todo.interfaces';

@UseGuards(AuthGuard('jwt'))
@Controller('todos')
export default class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAll(): Promise<{
    todos: Todo[];
  }> {
    const todos = await this.todosService.getAll();
    return { todos };
  }

  @Post()
  async create(
    @Body('todo') createTodoDto: CreateTodoDto,
  ): Promise<{ todo: Todo }> {
    const todo = await this.todosService.create(createTodoDto);
    return { todo };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<{ todo: Todo }> {
    const todo = await this.todosService.update(id, updateTodoDto);
    return { todo };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.todosService.delete(id);
  }
}
