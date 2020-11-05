import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './custom-validators';
import { Router, RouterLink,ActivatedRoute } from '@angular/router';
import { AppRoutes } from '../../core/utilities/Constants';

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
  profileUser: any;

  constructor(fb: FormBuilder,private router: Router,) { 
    this.profileUser = JSON.parse(localStorage.getItem('CurrentAccount'));
    console.log(this.profileUser);

    this.frChangePassword = fb.group({
      displayName: [this.profileUser.displayname,[Validators.required, Validators.minLength(2)]],
      newpassword: ['', [Validators.required, Validators.minLength(3)]],
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


  onSubmit(){
    //this.router.navigateByUrl(AppRoutes.D);
    console.log("Save");
  }
  onCancel(){
    console.log("Cancel");
  }
  

  get newpassword(){
    return this.frChangePassword.get('newpassword');    
  }
  get confirmPassword(){
    return this.frChangePassword.get('confirmPassword');    
  }
   get displayName(){
     return this.frChangePassword.get('displayName');
   }
  get formControls() { return this.frChangePassword.controls; }



}
