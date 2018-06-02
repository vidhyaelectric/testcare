import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthorized: boolean;
  isAuthorizedSubscription: Subscription;
  apiResult: string;
  userDataSubscription:Subscription;
  userData: boolean;
  constructor(private oidcSecurityService: OidcSecurityService, private http: HttpClient) {
    this.isAuthorized = false;
  //  this.oidcSecurityService.authorize();
    this.signUp();
  }

  ngOnInit(){
 //   this.oidcSecurityService.authorize();
  }
  
  ngOnDestroy() {
    this.isAuthorizedSubscription.unsubscribe();
  }

  signUp() {
    console.log('signup');
   // console.log(this.oidcSecurityService.authorize());    
    this.oidcSecurityService.authorize();
  }

  signOut() {
    this.oidcSecurityService.logoff();
  }


}
