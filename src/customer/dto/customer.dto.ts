import { IsDefined, IsEmail } from 'class-validator';

export class CustomerDto {
  readonly firstName: string;
  readonly lastName: string;

  @IsEmail()
  @IsDefined()
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly description: string;
  readonly createdAt: Date;
}
