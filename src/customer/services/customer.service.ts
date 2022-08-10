import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../interface/customer.interface';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  public async getCustomers(): Promise<Customer[]> {
    const customers = await this.customerModel.find();
    return customers;
  }
  public async getCustomer(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id);
    return customer;
  }
  public async addCustomer(customer): Promise<Customer> {
    const newCustomer = new this.customerModel(customer);
    return newCustomer.save();
  }
  public async deleteCustomer(id: string): Promise<any> {
    const deletedCustomer = await this.customerModel.findByIdAndRemove(id);
    return deletedCustomer;
  }
  public async updateCustomer(
    id: string,
    customer: Customer,
  ): Promise<Customer> {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(
      id,
      customer,
      { new: true },
    );
    return updatedCustomer;
  }
}
