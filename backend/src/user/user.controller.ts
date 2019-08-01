import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import {User} from './interface/user.interface'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto)
  }

  @Get('all')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
