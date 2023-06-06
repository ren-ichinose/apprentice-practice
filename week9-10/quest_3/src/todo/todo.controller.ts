import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { Todos } from '@prisma/client';
import TodoService from './todo.service';
import CreateTodoDto from './dto/create-todo.dto';
import UpdateTodoDto from './dto/update-todo.dto copy';

@Controller('todos')
export default class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @Render('todos/index')
  async getAll(): Promise<{ todoItems: Todos[] }> {
    const todoItems = await this.todoService.getAll();
    return { todoItems };
  }

  @Get('new')
  @Render('todos/new')
  getNewPage(): void {}

  @Get(':id')
  @Render('todos/update')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ todoItem: Todos }> {
    const todoItem = await this.todoService.getById(id);
    return { todoItem };
  }

  @Post()
  @Redirect('/todos')
  async create(@Body() createTodoDto: CreateTodoDto): Promise<void> {
    await this.todoService.create(createTodoDto);
  }

  @Post('update/:id')
  @Redirect('/todos')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<void> {
    await this.todoService.update(id, updateTodoDto);
  }

  @Get('delete/:id')
  @Redirect('/todos')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.todoService.delete(id);
  }
}
