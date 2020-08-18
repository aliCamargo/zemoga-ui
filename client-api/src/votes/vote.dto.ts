import { IsNotEmpty, IsEnum } from 'class-validator';
import { VoteType } from 'src/core/enumerations';
import { User } from 'src/users';

export class VoteDto {
  @IsNotEmpty()
  candidate: string;

  @IsEnum(VoteType)
  type: string;

  @IsNotEmpty()
  userId: number;
}
