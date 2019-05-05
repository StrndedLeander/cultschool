import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthenticationModule } from './authentication/authentication.module';
import { AwsProviderModule } from './aws-provider/aws-provider.module';


@Module({
  imports: [AuthenticationModule, MongooseModule.forRoot('mongodb://localhost/cultschool',{ useNewUrlParser: true }), AwsProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
