import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateAssignorBody {
  readonly id?: string;

  @IsNotEmpty({ message: 'O campo value é obrigatório' })
  @IsNumber({}, { message: 'O campo value deve ser um número' })
  readonly value: number;

  @IsNotEmpty({ message: 'O campo emissionDate é obrigatório' })
  @IsDate({ message: 'O campo emissionDate deve ser uma data' })
  readonly emissionDate: Date;

  @IsNotEmpty({ message: 'O campo assignor é obrigatório' })
  @IsString({ message: 'O campo assignor deve ser uma string' })
  readonly assignor: string;
}
