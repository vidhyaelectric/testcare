import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /*isAuthorized: boolean;
  isAuthorizedSubscription: Subscription;
  apiResult: string;
  userDataSubscription:Subscription;
  userData: boolean;
  constructor(private oidcSecurityService: OidcSecurityService, 
              private http: HttpClient) {
    this.isAuthorized = false;
    this.oidcSecurityService.authorize();
  }
  ngOnInit() {
    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized()
      .subscribe(isAuthorized => this.isAuthorized = isAuthorized);
      console.log('oninit');
      console.log(this.isAuthorized);
      console.log(this.oidcSecurityService.getIsAuthorized());
      this.userDataSubscription = this.oidcSecurityService.getUserData().subscribe(
        (userData: any) => {
             this.userData = userData
        });
        console.log(this.userData);
 
  }
  ngOnDestroy() {
    this.isAuthorizedSubscription.unsubscribe();
  }
*/
}
