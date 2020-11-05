import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  isSubmitted = false;  
  sendEmail = false;  


  constructor() { }

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        ])      
    });
  }
  reset(){
    debugger;
    console.log("forgot form" + this.forgotForm.value);
    this.sendEmail=true;
  }
  get username() {
    return this.forgotForm.get('username');
  }
 
  get formControls() { return this.forgotForm.controls; }



}
