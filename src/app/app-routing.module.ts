import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AuthGuard } from './core/services/auth.guard';
import { NoAuthGuard } from './core/services/no-auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AppRoutes } from './core/utilities/Constants'
import {ProfileComponent} from './account/profile/profile.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.HOME},
  { path: AppRoutes.LOGIN, component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: AppRoutes.HOME, component: HomeComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.ACCOUNT, component: AccountComponent, canActivate: [AuthGuard]}, 
  { path: AppRoutes.ACCOUNTDETAIL, component: AccountDetailComponent,canActivate: [AuthGuard] },
  { path: AppRoutes.ACCOUNTDETAILWITHID, component: AccountDetailComponent,canActivate: [AuthGuard] },
  { path: AppRoutes.PROFILE, component: ProfileComponent,canActivate: [AuthGuard] },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
