import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdatePayableBody {
  readonly id?: string;

  @IsNotEmpty({ message: 'O campo document é obrigatório' })
  @IsString({ message: 'O campo document deve ser uma string' })
  @Length(1, 30, {
    message: 'O campo document deve ter entre 1 e 30 caracteres',
  })
  readonly document: string;

  @IsNotEmpty({ message: 'O campo email é obrigatório' })
  @IsString({ message: 'O campo email deve ser uma string' })
  @Length(1, 140, {
    message: 'O campo email deve ter entre 1 e 140 caracteres',
  })
  @IsEmail({}, { message: 'O campo email deve ser um email válido' })
  readonly email: string;

  @IsNotEmpty({ message: 'O campo phone é obrigatório' })
  @IsString({ message: 'O campo phone deve ser uma string' })
  @Length(1, 20, { message: 'O campo phone deve ter entre 1 e 20 caracteres' })
  readonly phone: string;

  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  @IsString({ message: 'O campo name deve ser uma string' })
  @Length(1, 140, { message: 'O campo name deve ter entre 1 e 140 caracteres' })
  readonly name: string;
}
