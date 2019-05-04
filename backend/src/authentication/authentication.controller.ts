import { Controller, Inject, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './authentication.service'
import { RegisterDTO } from './dtos/register.dto';
import { LoginDTO } from './dtos/login.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(@Inject(AuthenticationService) private readonly authService: AuthenticationService) {}
  
  @Post()
  async registerUser(@Res() res, @Body() registerDTO: RegisterDTO){
    console.log("A client is trying to register a user", res, registerDTO)
    const registeredUser = await this.authService.registerUser(registerDTO)

    return res.status(HttpStatus.OK).json({
      message: 'New User has been registered',
      User: registeredUser
    })
  }

  @Get()
  async loginUser(@Res() res, @Body() loginDTO: LoginDTO) {
    await this.authService.loginUser(loginDTO).then(user => {
      return res.status(HttpStatus.OK).json({
        message: 'You are now logged in. Welcome!',
        User: user
      })
    }).catch(err => {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong!",
        error: err
      })
    })
  }
}
