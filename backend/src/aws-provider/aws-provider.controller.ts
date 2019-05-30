import { Controller, Inject, Post, Res, HttpStatus, Body, Get } from '@nestjs/common';
import { AwsProviderService } from './aws-provider.service';
import { RegisterDTO } from 'src/authentication/dtos/register.dto';
import { LoginDTO } from 'src/authentication/dtos/login.dto';

@Controller('aws-provider')
export class AwsProviderController {
  constructor(@Inject(AwsProviderService) private readonly awsService: AwsProviderService) {}

  @Post('register')
  async registerUser(@Res() res, @Body() registerDTO: RegisterDTO){
    const cognitoUser = await this.awsService.RegisterUser(registerDTO)


    return res.status(HttpStatus.OK).json({
      message: "Added User to UserPool",
      User: cognitoUser
    })
  }

  @Post('login')
  async loginUser(@Res() res, @Body() loginDTO: LoginDTO) {
    const userTokens = await this.awsService.Login(loginDTO)

    return res.status(HttpStatus.OK).json({
      message: "User Logged in successfully!",
      User: userTokens
    })
  }
}
