import { CreateChargeDto } from '@app/common';
import { IsEmail } from 'class-validator';

export class PaymentChargeDto extends CreateChargeDto {
  @IsEmail()
  email: string;
}
