import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AppRoutes } from './core/utilities/Constants'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.HOME},
  { path: AppRoutes.LOGIN, component: LoginComponent },
  { path: AppRoutes.HOME, component: HomeComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.ACCOUNT, component: AccountComponent, canActivate: [AuthGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
