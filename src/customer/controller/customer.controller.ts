import { CustomerDto } from './../dto/customer.dto';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  // Route will be /hello

  @Get()
  async getCustomers(@Res() res) {
    const data = await this.customerService.getCustomers();
    res.status(HttpStatus.OK).json(data);
  }
  @Get(':id')
  async getCustomer(@Res() res, @Param('id') id: string) {
    const data = await this.customerService.getCustomer(id);
    res.status(HttpStatus.OK).json(data);
  }
  @Post()
  async addCustomer(@Res() res, @Body() customerParam: CustomerDto) {
    const data = await this.customerService.addCustomer(customerParam);
    res.status(HttpStatus.OK).json(data);
  }
}
