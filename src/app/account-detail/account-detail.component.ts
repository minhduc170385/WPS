import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { User } from './../user';
//import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Console } from 'console';
@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accountForm:FormGroup;  
  @Input() account: User; 
  
  Roles: any =['admin','user'];

  constructor(private authService: AuthService) {
    console.log("+++++++");
   }
  

  ngOnInit(): void {
    //console.log("Detail>>>" + this.account.id);
    this.accountForm = new FormGroup({
      username: new FormControl('',[ 
        Validators.required, 
        Validators.minLength(3)]),
      email: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      active: new FormControl(true,[])
    });
  }

  get username(){
    return this.accountForm.get('username');    
  }
  get email(){
    return this.accountForm.get('email');    
  }
  get role(){
    return this.accountForm.get('role');    
  }

  get formControls() { return this.accountForm.controls; }



}
