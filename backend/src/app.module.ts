import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthenticationModule } from './authentication/authentication.module';
import { AwsProviderModule } from './aws-provider/aws-provider.module';
import { CoursesModule } from './courses/courses.module';


@Module({
  imports: [AuthenticationModule, MongooseModule.forRoot('mongodb://localhost/cultschool',{ useNewUrlParser: true }), AwsProviderModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
