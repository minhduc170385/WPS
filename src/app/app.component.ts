import { Component } from '@angular/core';
import { UserService } from './core/services/user.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wps';

  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }

}
