import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user-module/user.module';

@Module({
  imports: [UserModule, DatabaseModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
