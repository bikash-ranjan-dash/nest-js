import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDtod, UserParamDto } from './dto/user.dto';
import { HttpExceptionFilter } from './filter';
import { User } from './interface/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Route will be /hello

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() user: UserDtod): User {
    return this.userService.addUser(user);
  }

  @Get(':email')
  @UseFilters(new HttpExceptionFilter())
  getUser(@Param() params: UserParamDto): User {
    return this.userService.getUser(params.email);
  }

  @Delete(':email')
  deleteUser(@Param() params: UserParamDto): User {
    return this.userService.deleteUser(params.email);
  }
}
