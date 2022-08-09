import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDtod {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  name: string;
}
export class UserParamDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;
}
