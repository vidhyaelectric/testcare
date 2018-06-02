import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import {ActivatedRoute,Router,RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {

  filtertask="";
  taskpercent=2;
  trackpercent=92;
  taskcolor='#d54d79';
  trackcolor='#3cb371';
  tasktitle="TODAY'S TASKS";
  tracktitle= this.trackpercent +"% ON TRACK";
  logoimgsrc= "./assets/logo.png";
  apiResult: string;
  param1: string;
  param2: string;
  
  constructor(public oidcSecurityService: OidcSecurityService,
             // private http: HttpClient,
//              private route: Router
              private route: ActivatedRoute
  //           public jwtHelper: JwtHelperService
              ) 
    {
      console.log('token');
      //console.log(this.route.snapshot.params['access_token']);
      this.route.queryParamMap.subscribe(params => {
          console.log(params['access_token']);
      })
    
    }
     tasks:any[] =
    [
      {
            "id": 1,
            "name": "Outcome Needed",
            "details": "Colon Cancer,Initial Treatment",
            "date": '05/17/2018',
            "patient": "John Doe",
            "patientid":"09827361",
            "highlightflag":true,
            "image": "./assets/highlighter.png"
      },
      {
        "id": 2,
        "name": "AUthorization Expiring",
        "details": "Colon Cancer,Radiation",
        "date": '05/30/2018',
        "patient": "Bob Smith",
        "patientid":"09827362",
        "highlightflag":true,
        "image": "./assets/highlighter.png"
      },
      {
        "id": 3,
        "name": "Complete pathway",
        "details": "Lung Cancer",
        "date": '5 Weeks',
        "patient": "Jeff Charles",
        "patientid":"09827362",
        "highlightflag":false,
        "image": "./assets/highlighter.png"
      },
      {
        "id": 4,
        "name": "Outcome Needed",
        "details": "Breast Cancer,Biopsy",
        "date": '06/30/2018',
        "patient": "MAry Sue",
        "patientid":"09827362",
        "highlightflag":false,
        "image": "./assets/highlighter.png"
      }
    ]
   /* taskdial:any[]=
    [
      {
        "taskpercent":2,
        "trackpercent":92,
        "taskcolor":'#FF0000',
        "trackcolor":'#3cb371'
      }
    ]
*/

getDecodedAccessToken(token: string): any {
  try{
      return jwt_decode(token);
  }
  catch(Error){
      return null;
  }
}
callapi(){
  var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vM2FlYjM1YWQtYTY4ZS00MzlmLWJlNmEtMWY4ODEyZGRlNmY0L3YyLjAvIiwiZXhwIjoxNTI3MDM4NDg3LCJuYmYiOjE1MjcwMzQ4ODcsImF1ZCI6ImIzZDlmNTI5LWJhYTEtNDZlMy1iODEwLTIzNmNhZDMxMDgxNSIsIm9pZCI6IjJjYjYzNmMwLTRhYWUtNGE4MC1hZWQxLTIwNGI4ZDEwNTQ5NiIsInN1YiI6IjJjYjYzNmMwLTRhYWUtNGE4MC1hZWQxLTIwNGI4ZDEwNTQ5NiIsIm5hbWUiOiJWaWRoeWEgUiIsImVtYWlscyI6WyJ2aWRoeWFlbGVjdHJpY0BnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfQjJDc2ludXAiLCJub25jZSI6Ik4wLjU0MjE0MTk1MzQzOTA5NzcxNTI3MDM0ODUyMzg4Iiwic2NwIjoicmVhZCIsImF6cCI6ImIzZDlmNTI5LWJhYTEtNDZlMy1iODEwLTIzNmNhZDMxMDgxNSIsInZlciI6IjEuMCIsImlhdCI6MTUyNzAzNDg4N30.RON7RIag_bspyMfuatFWNu3yDZFxRUdJlXojIQSElrw20-UJoQpEFaF0lazZnDsEkcCzqOLS0YybIwRwIwCAbJaWFYi7E6Zsq5XLHhc4lf7US1PXzSa7krjlA7yyXxMfD17XLNANpWnkJD62DkYg0FXMl-INo0E1qo6f7aH8sMZ5P4B22VQE_VeYyAW9uCkPQE-1uMt998_h56NMSpU7BIypQT-EwCXIQ5irCo69bN40DpBYqeH8scenXyiIzYf1BUx3tAu1N4vnRXmHxLcfJqbQNhVcqPYPD-0XGu1WY9YefVGO6isHjwTARm40UmvphNgLYdtTnBrN0Wac3AZJEw"
  console.log('tokendecode');
  console.log(this.getDecodedAccessToken(token));
  console.log(this.getDecodedAccessToken(token).name);
 // console.log(jwt_decode(token));
  /*console.log('api');
  const token = this.oidcSecurityService.getToken();
  console.log('token');
  console.log(this.oidcSecurityService.getToken());
  const apiURL = 'https://fabrikamb2chello.azurewebsites.net/hello';
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.get(apiURL, { headers: headers }).subscribe(
      response => this.apiResult = JSON.stringify(response),
      error => console.log(error)
      );
      console.log('API result');
      console.log(JSON.stringify(this.apiResult));
 */  
/*const helper = new JwtHelperService();
var myRawToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vM2FlYjM1YWQtYTY4ZS00MzlmLWJlNmEtMWY4ODEyZGRlNmY0L3YyLjAvIiwiZXhwIjoxNTI3MDM4NDg3LCJuYmYiOjE1MjcwMzQ4ODcsImF1ZCI6ImIzZDlmNTI5LWJhYTEtNDZlMy1iODEwLTIzNmNhZDMxMDgxNSIsIm9pZCI6IjJjYjYzNmMwLTRhYWUtNGE4MC1hZWQxLTIwNGI4ZDEwNTQ5NiIsInN1YiI6IjJjYjYzNmMwLTRhYWUtNGE4MC1hZWQxLTIwNGI4ZDEwNTQ5NiIsIm5hbWUiOiJWaWRoeWEgUiIsImVtYWlscyI6WyJ2aWRoeWFlbGVjdHJpY0BnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfQjJDc2ludXAiLCJub25jZSI6Ik4wLjU0MjE0MTk1MzQzOTA5NzcxNTI3MDM0ODUyMzg4Iiwic2NwIjoicmVhZCIsImF6cCI6ImIzZDlmNTI5LWJhYTEtNDZlMy1iODEwLTIzNmNhZDMxMDgxNSIsInZlciI6IjEuMCIsImlhdCI6MTUyNzAzNDg4N30.RON7RIag_bspyMfuatFWNu3yDZFxRUdJlXojIQSElrw20-UJoQpEFaF0lazZnDsEkcCzqOLS0YybIwRwIwCAbJaWFYi7E6Zsq5XLHhc4lf7US1PXzSa7krjlA7yyXxMfD17XLNANpWnkJD62DkYg0FXMl-INo0E1qo6f7aH8sMZ5P4B22VQE_VeYyAW9uCkPQE-1uMt998_h56NMSpU7BIypQT-EwCXIQ5irCo69bN40DpBYqeH8scenXyiIzYf1BUx3tAu1N4vnRXmHxLcfJqbQNhVcqPYPD-0XGu1WY9YefVGO6isHjwTARm40UmvphNgLYdtTnBrN0Wac3AZJEw"
const decodedToken = helper.decodeToken(myRawToken);
console.log('decodedToken');
console.log(decodedToken);
const expirationDate = helper.getTokenExpirationDate(myRawToken);
const isExpired = helper.isTokenExpired(myRawToken);
*/

}

}
