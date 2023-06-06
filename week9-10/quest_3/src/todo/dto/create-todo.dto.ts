import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
