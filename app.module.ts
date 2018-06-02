import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { DialComponent } from './dial/dial.component';
import { GaugeComponent } from './gauge/gauge.component';
import { NavbarhorizontalComponent } from './navbarhorizontal/navbarhorizontal.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { environment } from '../environments/environment';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {
  AuthModule,
  OidcSecurityService,
  OpenIDImplicitFlowConfiguration,
  OidcConfigService,
  AuthWellKnownEndpoints
} from 'angular-auth-oidc-client';
import { HomeComponent } from './home/home.component';

export function loadConfig(oidcConfigService: OidcConfigService) {
  console.log('APP_INITIALIZER STARTING');
  //return () => oidcConfigService.load_using_custom_stsServer('https://login.microsoftonline.com/BetaCPCB2c.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_Beta_SingUpPolicy');
  return () => oidcConfigService.load_using_custom_stsServer('https://login.microsoftonline.com/vidB2C.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_B2Csinup');
}


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'task', component: TaskComponent},
  { path: 'navbarhorizontal', component: NavbarhorizontalComponent},
  { path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DialComponent,
    GaugeComponent,
    NavbarhorizontalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgCircleProgressModule.forRoot({
      // set defaults here
  /*    radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300   */
      "radius": 60,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false ,
      "subtitle":"Due < 1 WEEK"     
    }),
    NgxGaugeModule,
    
  ],
  providers: [
    OidcConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: loadConfig,
        deps: [OidcConfigService],
        multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private oidcConfigService: OidcConfigService,
    ) 
    {
        this.oidcConfigService.onConfigurationLoaded.subscribe(() => {
        const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
        console.log('constructor');
        openIDImplicitFlowConfiguration.stsServer = 'https://login.microsoftonline.com/vidB2C.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2Csinup&client_id=b3d9f529-baa1-46e3-b810-236cad310815&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A4200&scope=openid&response_type=id_token&prompt=login';
        //This is the redirect_url which was configured on the security token service (STS) server.
        openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:4200/task';
        //The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience. The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
        openIDImplicitFlowConfiguration.client_id = 'b3d9f529-baa1-46e3-b810-236cad310815';
        //'id_token Name of the flow which can be configured. You must use the 'id_token token' flow, if you want to access an API or get user data from the server. The access_token is required for this, and only returned with this flow.
        openIDImplicitFlowConfiguration.response_type = 'id_token token';
        
        //This is this scopes which are requested from the server from this client. This must match the STS server configuration.
        openIDImplicitFlowConfiguration.scope = 'openid https://vidB2C.onmicrosoft.com/notes/read';
        //Url after a server logout if using the end session API.
        openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost:4200';
        openIDImplicitFlowConfiguration.post_login_route = '/task';
        openIDImplicitFlowConfiguration.forbidden_route = '/task';
        //openIDImplicitFlowConfiguration.unauthorized_route = '/home';
        openIDImplicitFlowConfiguration.auto_userinfo = false;
        openIDImplicitFlowConfiguration.log_console_warning_active = true;
        //openIDImplicitFlowConfiguration.log_console_debug_active = !environment.production;
        openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 30;

        const authWellKnownEndpoints = new AuthWellKnownEndpoints();
        authWellKnownEndpoints.setWellKnownEndpoints(this.oidcConfigService.wellKnownEndpoints);

        this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);
      });
      console.log('APP STARTING');
  }

 }
