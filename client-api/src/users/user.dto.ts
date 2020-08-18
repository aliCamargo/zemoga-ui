import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { MarriageStatus } from 'src/core/enumerations';
import { User } from './user.entity';
import { UniqueOnDatabase } from 'src/core/validations';

export class UserDto {
  @IsNotEmpty()
  @UniqueOnDatabase(User)
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNumber()
  age: number;

  @IsEnum(MarriageStatus)
  marriageStatus: string;
}
