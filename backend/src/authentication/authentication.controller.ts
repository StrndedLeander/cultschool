import { Controller, Inject, Get, Post, Res, Body, HttpStatus, Param, NotFoundException, Put, Query, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service'
import { RegisterDTO } from './dtos/register.dto';
import { LoginDTO } from './dtos/login.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(@Inject(AuthenticationService) private readonly authService: AuthenticationService) { }

  @Post('register')
  async registerUser(@Res() res, @Body() registerDTO: RegisterDTO) {
    const registeredUser = await this.authService.registerUser(registerDTO)

    return res.status(HttpStatus.OK).json({
      message: 'New User has been registered',
      User: registeredUser
    })
  }

  @Get('users')
  async getAllUsers(@Res() res) {
    const users = await this.authService.getAllUsers()
    return res.status(HttpStatus.OK).json(users)
  }

  @Get('user/:userID')
  async getUser(@Res() res, @Param('userID') userID) {
    const user = await this.authService.getUser(userID)
    if (!user) throw new NotFoundException('User does not exist!')
    return res.status(HttpStatus.OK).json(user)
  }

  @Put('/update')
  async updateUser(@Res() res, @Query('userID') userID, @Body() updateUserDTO: RegisterDTO) {
    const user = await this.authService.updateUser(userID, updateUserDTO)
    if (!user) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json({
      message: `User ${userID} has been successfully updated`,
      user
    });
  }

  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID') userID) {
    const user = await this.authService.deleteUser(userID)
    if(!user) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json({
      message: `User ${userID} has been deleted`,
      user
    });
  }
}  
