import { User } from '../core/models/user.model';
import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { AppRoutes } from '../core/utilities/Constants';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  user: User;
  showLoginFail = false;  

  constructor(private authService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    console.log("Begin Login");
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.showLoginFail = true;
      return;
    }

    console.log("Begin Login");
    this.authService.attemptAuth(this.loginForm.value)
      .subscribe(data => {
        this.user = data;
        if (this.user) {
          console.log("Login success");
          this.router.navigateByUrl(AppRoutes.HOME);
        }
        else {
          console.log("FAIL >>>");
        }

      }, error => {
        console.log("Login fail");
      });
  }

  onForgotPasswordClick(){
    this.router.navigateByUrl(AppRoutes.FORGOTPASSWORD);
  };

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get formControls() { return this.loginForm.controls; }



}
