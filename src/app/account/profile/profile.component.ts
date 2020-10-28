import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './custom-validators';

//import { CustomValidators } from './custom-validators';
//import {MustMatch} from './custom-validators.validator'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  frChangePassword: FormGroup;
  id: number;
  loading = false;
  submitted= false; 
  item: any;

  constructor(fb: FormBuilder) { 
    this.item = JSON.parse(localStorage.getItem('CurrentAccount'));
    console.log(this.item);

    this.frChangePassword = fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }

  ngOnInit(): void {
    // this.frChangePassword = new FormGroup({});
    // this.frChangePassword.addControl('password', new FormControl('',[Validators.required,Validators.minLength(3)]));
    // this.frChangePassword.addControl('confirmPassword', new FormControl('',
    //     [Validators.compose(
    //         [Validators.required, this.validateAreEqual.bind(this)]
    //     )]));

    


    //  this.frChangePassword = new FormGroup({        
    //       password: new FormControl('',[ 
    //         Validators.required, 
    //         Validators.minLength(3)]),
    //       confirmPassword: new FormControl('',
    //             [Validators.required,
    //             PasswordValidation.MatchPassword]
    //       )

        
    //  });
  }
  // function passwordMatchValidator(g: FormGroup) {
  //   return g.get('password').value === g.get('passwordConfirm').value
  //      ? null : {'mismatch': true};
  // }

  
  get password(){
    return this.frChangePassword.get('password');    
  }
  get confirmPassword(){
    return this.frChangePassword.get('confirmPassword');    
  }
  get formControls() { return this.frChangePassword.controls; }



}
