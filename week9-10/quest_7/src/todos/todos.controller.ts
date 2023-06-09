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
import Todo from './interfaces/todo.interfaces';
import TodoDto from './dto/todo.dto';

@Controller('todos')
@UseGuards(AuthGuard('jwt'))
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
  async create(@Body('todo') todoDto: TodoDto): Promise<{ todo: Todo }> {
    const todo = await this.todosService.create(todoDto);
    return { todo };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body('todo') todoDto: TodoDto,
  ): Promise<{ todo: Todo }> {
    const todo = await this.todosService.update(id, todoDto);
    return { todo };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.todosService.delete(id);
  }
}
