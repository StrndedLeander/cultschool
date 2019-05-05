import { Injectable } from '@nestjs/common';
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
import {userpool} from './userpool.config'

@Injectable()
export class AwsProviderService {
  constructor() {}

  poolData = {
    UserPoolID: userpool.UserPoolID,
    ClientID: userpool.ClientID
  }
  userPool = new AmazonCognitoIdentity.CognitoUserPool(this.poolData);

  RegisterUser(){
    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:"Prasad Jayashanka"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"preferred_username",Value:"jay"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value:"male"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value:"1991-06-21"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:"CMB"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:"sampleEmail@gmail.com"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:"+5412614324321"}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"custom:scope",Value:"admin"}));

    this.userPool.signUp('sampleEmail@gmail.com', 'SamplePassword123', attributeList, null, function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        let cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
}
}
