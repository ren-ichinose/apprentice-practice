import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export default class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
