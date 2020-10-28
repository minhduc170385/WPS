import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './account/profile/profile.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent}, //, canActivate: [AuthGuard]  
  { path: 'accountDetail', component: AccountDetailComponent },
  { path: 'accountDetail/:id', component: AccountDetailComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: HomeComponent, canActivate: [AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
