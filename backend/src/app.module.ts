import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/kultschool',{ useNewUrlParser: true }),AuthenticationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
