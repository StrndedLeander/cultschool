import { Injectable } from '@nestjs/common';
import AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
import AWS = require('aws-sdk');
import request = require('request');
import jwkToPem = require('jwk-to-pem');
import jwt = require('jsonwebtoken');
import { userpool } from './userpool.config'
import { RegisterDTO } from 'src/authentication/dtos/register.dto';
import { LoginDTO } from 'src/authentication/dtos/login.dto';

@Injectable()
export class AwsProviderService {
  constructor() {}

  poolData = {
    UserPoolId: userpool.UserPoolID,
    ClientId: userpool.ClientID
  }
  userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);

  async RegisterUser(registerDTO: RegisterDTO) {
    console.log(registerDTO['address'])
    var attributeList = [];
    for (var key in registerDTO) {
      if (registerDTO.hasOwnProperty(key)) {
        if (key !== 'password') {
          attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: key, Value: registerDTO[key] }))
          console.log('Name: ' + key, 'Value: ' + registerDTO[key])
        }
      }
    }

    await this.userPool.signUp(registerDTO.email, registerDTO.password, attributeList, null, function (err, result) {
      if (err) {
        console.log('Error:',err);
        return;
      }
      console.log("User:",result.user)
      let cognitoUser = result.user;
      return cognitoUser;
    });
  }

  async Login(loginDTO: LoginDTO) {
    let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
      Username: loginDTO.username,
      Password: loginDTO.password,
    });

    let userData = {
      Username: loginDTO.username,
      Pool: this.userPool
    };

    let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        let tokens = {
          access_token: result.getAccessToken().getJwtToken(),
          id_token: result.getIdToken().getJwtToken(),
          refresh_token: result.getRefreshToken().getToken()
        }
        console.log('access token + ' + tokens.access_token);
        console.log('id token + ' + tokens.id_token);
        console.log('refresh token + ' + tokens.refresh_token);
        
        return tokens
      },
      onFailure: function (err) {
        console.log(err);
      },

    });
  }
}
