import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { AuthenticationService } from './authentication.service'

@Controller('authentication')
export class AuthenticationController {
  constructor(@Inject(AuthenticationService) private readonly client: ClientProxy) {}
  
}
