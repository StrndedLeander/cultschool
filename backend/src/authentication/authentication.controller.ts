import { Controller, Inject, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './authentication.service'
import { RegisterDTO } from './dtos/register.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(@Inject(AuthenticationService) private readonly authService: AuthenticationService) {}
  
  @Post()
  async registerUser(@Res() res, @Body() registerDTO: RegisterDTO){
    const registeredUser = await this.authService.registerUser(registerDTO)

    return res.status(HttpStatus.OK).json({
      message: 'New User has been registered',
      User: registeredUser
    })
  }
}
