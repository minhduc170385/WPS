import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user';
import { Observable } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: User[];
  selectedAccount: User;
  currentItem = 'Television';
constructor(private authService: UserService, private route: ActivatedRoute) {  
  }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
    this.authService.getAccounts()
      .subscribe(data => {
        this.accounts = data;
        console.log(this.accounts);
      })
  }

  onSelect(account: User): void {
    this.selectedAccount = account;
    console.log(">>>>" + account.id);
  }
}
