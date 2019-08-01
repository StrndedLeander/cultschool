import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthenticationService {

  async hashPassword(pwText) {
    bcrypt.hash(pwText, 10, function(err, hash) {
      if(err !== null) {
      }
    });
  }
}
