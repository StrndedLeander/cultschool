import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './interfaces/user.interface'
import { RegisterDTO } from './dtos/register.dto'
import { LoginDTO } from './dtos/login.dto';

@Injectable()
export class AuthenticationService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec()
    return users
  }

  async registerUser(registerDTO: RegisterDTO): Promise<User> {
    const newUser = await this.userModel(registerDTO);
    return newUser.save();
  }

  async getUser(userID): Promise<User> {
    const user = await this.userModel.findById(userID).exec();
    return user
  }

  async updateUser(userID, updateDTO: RegisterDTO): Promise<User> {
    const user = this.userModel.findByIdAndUpdate(userID, updateDTO, { new: true })
    return user
  }

  async deleteUser(userID): Promise<User> {
    const user = this.userModel.findByIdAndDelete(userID)
    return user
  }

  // async loginUser(loginDTO: LoginDTO): Promise<User> {
  //   const username = loginDTO.username

  //   return await this.userModel.findOne({ username: username }).exec()
  // }
}
