import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AuthGuard } from './core/services/auth.guard';
import { NoAuthGuard } from './core/services/no-auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AppRoutes } from './core/utilities/Constants'
import { ProfileComponent } from './account/profile/profile.component'
import { SettingsModule } from './settings/settings.module';
import { ValidationModule } from './validation/validation.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.HOME},
  { path: AppRoutes.LOGIN, component: LoginComponent, canActivate: [NoAuthGuard],data:{showHeader:false} },
  { path: AppRoutes.FORGOTPASSWORD, component: ForgetPasswordComponent, canActivate: [NoAuthGuard],data:{showHeader:false} },
  { path: AppRoutes.HOME, component: HomeComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.SETTINGS, loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: AppRoutes.VALIDATION, loadChildren: () => import('./validation/validation.module').then(m => m.ValidationModule) },
  { path: AppRoutes.ACCOUNTDETAIL, component: AccountDetailComponent,canActivate: [AuthGuard] },
  { path: AppRoutes.ACCOUNTDETAILWITHID, component: AccountDetailComponent,canActivate: [AuthGuard] },
  { path: AppRoutes.PROFILE, component: ProfileComponent,canActivate: [AuthGuard] },
];




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
