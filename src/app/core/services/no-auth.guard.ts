import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AppRoutes } from '../utilities/Constants';
import { map ,  take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  
  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.userService.isAuthenticated.pipe(take(1), map(
        isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigateByUrl(AppRoutes.HOME_SLASH)
            return false
          } else {
            return true
          }
        }
      ))
  }
}
