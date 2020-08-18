import { IsNotEmpty, IsEnum } from 'class-validator';
import { VoteType } from 'src/core/enumerations';

export class VoteDto {
  @IsNotEmpty()
  candidate: string;

  @IsEnum(VoteType)
  type: string;

  @IsNotEmpty()
  userId: number;
}
