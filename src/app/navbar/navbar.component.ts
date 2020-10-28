import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User
  isAuthenticated: boolean

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      data => this.currentUser = data,
    )

    this.userService.isAuthenticated.subscribe(
      data => this.isAuthenticated = data
    )
  }

  openProfile(): void {
    this.router.navigateByUrl("/profile")
  }

  logout(): void {
    this.userService.purgeAuth()
    this.router.navigateByUrl("/login")
  }

}
