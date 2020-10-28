import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [    
    AppComponent,
    LoginComponent,
    NavbarComponent,   
    HomeComponent, 
    MessagesComponent, 
    AccountComponent, 
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   { path: '', pathMatch: 'full', redirectTo: 'login'},
    //   { path: 'login', component: LoginComponent },
    //   { path: 'account', component: AccountComponent}, 
    //   { path: 'accountDetail', component: AccountDetailComponent },
    //   { path: 'accountDetail/:id', component: AccountDetailComponent },
    //   // { path: 'admin', component: AdminComponent,canActivate: [AuthGuard] }
    // ]),

    HttpClientInMemoryWebApiModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
