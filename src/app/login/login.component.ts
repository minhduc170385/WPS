import { User } from './../user';
import { AuthService } from './../service/auth.service';
import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { Observable} from 'rxjs';


//import { HeroService } from '../hero.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  users: User[];
  user: User;
  

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder ) {

   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[ 
        Validators.required, 
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace]),
      password: new FormControl('', Validators.required)    
    });



  }
 
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    
    //const token = this.authService.authUser(this.loginForm.value);
    // if(token){
    //   localStorage.setItem('token', token.username);
    // }
    
    // this.authService.getHeroes()
    //         .subscribe(users => this.users = users);

    // this.authService.getHeroes()
    //       .subscribe(data => {
    //         this.users = data;                        
    //       })

    console.log("Begin Login");
    this.authService.login(this.loginForm.value)
                      .subscribe(data =>{
                        this.user = data;
                        if(this.user)
                        {
                          console.log("Login success");
                          this.router.navigateByUrl('/account');
                        }
                        else {
                          console.log("FAIL >>>");
                        }
                        
                      }, error =>{
                        console.log("Login fail");
                      });
    // console.log("XXXX:" + this.user);
    // if(this.user)
    // {
    //   console.log("Login success");
    //   this.router.navigateByUrl('/admin');
    // }
    // else {
    //   console.log("Login fail");
    // }
  
  

  }

  get username(){
    return this.loginForm.get('username');    
  }
  get password(){
    return this.loginForm.get('password');    
  }
  get formControls() { return this.loginForm.controls; }

  

}
