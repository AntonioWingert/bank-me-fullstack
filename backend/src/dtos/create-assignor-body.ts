import { IsDateString, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateAssignorBody {
  readonly id?: string;

  @IsNotEmpty({ message: 'O campo value é obrigatório' })
  @IsNumber({}, { message: 'O campo value deve ser um número' })
  readonly value: number;

  @IsNotEmpty({ message: 'O campo emissionDate é obrigatório' })
  @IsDateString({}, { message: 'O campo emissionDate deve ser uma data' })
  readonly emissionDate: Date;

  @IsNotEmpty({ message: 'O campo assignor é obrigatório' })
  @IsUUID()
  readonly assignor: string;
}
