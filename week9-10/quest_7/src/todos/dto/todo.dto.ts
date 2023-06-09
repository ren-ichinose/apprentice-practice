import { IsNotEmpty, IsString } from 'class-validator';

export default class TodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}
