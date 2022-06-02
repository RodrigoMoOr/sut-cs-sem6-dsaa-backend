import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {
  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getPaymentById() {}

  @Get('history')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getPaymentsHistory() {}
}
