import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './core/services/user.service';
import { AppRoutes } from './core/utilities/Constants';
import { map ,  take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isAuthenticated.pipe(take(1), map(
        isAuthenticated => {
          if (isAuthenticated)
            return true
          else {
            this.router.navigateByUrl(AppRoutes.LOGIN_SLASH, {
              queryParams: {
                return: state.url
              }
            })
            return false
          }
        }
      ))
  }
}
