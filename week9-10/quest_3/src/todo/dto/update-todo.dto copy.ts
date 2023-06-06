import { IsNotEmpty, IsString } from 'class-validator';

export default class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
