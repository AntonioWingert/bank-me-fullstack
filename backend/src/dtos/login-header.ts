import { IsNotEmpty, IsString } from 'class-validator';

export class LoginHeader {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
