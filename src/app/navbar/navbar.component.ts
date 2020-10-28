import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, Role } from '../core/models/user';
import { Router, RouterLink } from '@angular/router';
import { AppRoutes } from '../core/utilities/Constants';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      data => {
        // this.currentUser = new User().deserialize(data)
        this.currentUser = data
      }
    )
  }

  openProfile(): void {
    this.router.navigateByUrl(AppRoutes.ACCOUNT_SLASH)
  }

  logout(): void {
    this.userService.purgeAuth()
    this.router.navigateByUrl(AppRoutes.LOGIN_SLASH)
  }

}
