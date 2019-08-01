import { Controller, Post, Req } from '@nestjs/common';
import { AuthenticationModule } from './authentication.module';
import { AuthenticationService } from './authentication.service'
import { User } from '../user/interface/user.interface'

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }
  @Post()
  login() {

  }
}
