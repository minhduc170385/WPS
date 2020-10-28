import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../core/models/user';
import { Router } from '@angular/router';
import { AppRoutes } from '../core/utilities/Constants';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User
  isAuthenticated: boolean
  isAdmin: boolean

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      data => {
        this.currentUser = data
        this.isAdmin = this.currentUser.isAdmin()
      }
    )

    this.userService.isAuthenticated.subscribe(
      data => {
        this.isAuthenticated = data
        if (!data) {
          this.router.navigateByUrl(AppRoutes.LOGIN_SLASH)
        }
      }
    )
  }

  openProfile(): void {
    this.router.navigateByUrl(AppRoutes.ACCOUNT_SLASH)
  }

  logout(): void {
    this.userService.purgeAuth()
  }

}
