import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User, Role } from '../core/models/user.model';
import { Router, RouterLink,ActivatedRoute } from '@angular/router';
import { AppRoutes } from '../core/utilities/Constants';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  showMenu: boolean;
  isAdmin: boolean;
  menuEnum = MenuAction;

  
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
  

  onMenuClick(item){
    switch(item){
      case MenuAction.Profile:
        {
          console.log(item);
          this.router.navigateByUrl(AppRoutes.PROFILE_SLASH);
          break;
        }
      case MenuAction.DashBoard:{
        console.log("Dashboard");
        break;

      }
      case MenuAction.ValidationTool:{
          console.log(item);
          this.router.navigateByUrl(AppRoutes.VALIDATION_SLASH);
          break;
      }
      case MenuAction.Administration:{
        console.log(item);
        this.router.navigateByUrl(AppRoutes.ACCOUNT_SLASH);
        break;
      }
      case MenuAction.SignOut:{
        console.log(item);
        this.userService.purgeAuth()
        this.router.navigateByUrl(AppRoutes.LOGIN_SLASH)
        break;
      }
      default:{
        console.log(item);
      }
      
    }
    
    //console.log("Event:" + event + " item:" + item);
  }

}
export enum MenuAction{
  DashBoard,
  ValidationTool,
  Profile,
  Administration,
  SignOut

}

