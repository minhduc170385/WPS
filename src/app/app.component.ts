import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';
// import { Router } from "@angular/router";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wps';
  showHeader = false;

  constructor (
    private userService: UserService,
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.userService.populate();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;       
      }
    });
  }

}
