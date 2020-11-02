import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User, Role } from '../core/models/user';
import { Router, RouterLink,ActivatedRoute } from '@angular/router';
import { AppRoutes } from '../core/utilities/Constants';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User
  showMenu: boolean
  isAdmin: boolean

  constructor(
    private userService: UserService,
    private router: Router,    
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      data => {
        this.currentUser = new User().deserialize(data)
        this.showMenu = Object.keys(this.currentUser).length != 0
        this.isAdmin = this.currentUser.isAdmin()
      }
    )
  }
  logout(): void {
    this.userService.purgeAuth()
    this.router.navigateByUrl(AppRoutes.LOGIN_SLASH)
  }

}
