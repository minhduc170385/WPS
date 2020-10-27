import { Component, OnInit,Input } from '@angular/core';
import { User } from '../core/models/user';
//import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../core/services/user.service';
@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accountForm:FormGroup;  
  @Input() account: User; 
  constructor(private authService: UserService) { }
  ngOnInit(): void {
    //console.log("Detail>>>" + this.account.id);
    this.accountForm = new FormGroup({
      username: new FormControl('',[ 
        Validators.required, 
        Validators.minLength(3)]),
      email: new FormControl('', Validators.required)    
    });
  }

  get username(){
    return this.accountForm.get('username');    
  }
  get email(){
    return this.accountForm.get('email');    
  }
  get formControls() { return this.accountForm.controls; }



}
