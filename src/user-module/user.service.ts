import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[] = [];
  getUsers(): User[] {
    return this.users;
  }
  getUser(email: string): User {
    const user = this.users.find((u) => u.email === email);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return user;
  }
  addUser(user: User): User {
    this.users.push(user);
    return user;
  }
  deleteUser(email: string): User {
    const user = this.users.find((u) => u.email === email);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    this.users = this.users.filter((u) => u.email !== email);
    return user;
  }
}
