import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './interfaces/user.interface'
import { RegisterDTO } from './dtos/register.dto'

@Injectable()
export class AuthenticationService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async registerUser(registerDTO: RegisterDTO): Promise<User> {
    const newUser = await this.userModel(registerDTO);
    return newUser.save();
  }
}
