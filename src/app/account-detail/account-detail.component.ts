import { Component, OnInit,Input } from '@angular/core';
import { User } from '../core/models/user';
//import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accountForm:FormGroup;  
  //@Input() account: User; 
  id: number;
  isAddMode :boolean;  
  loading = false;
  submitted= false; 
  Roles: any =['admin','user'];

  constructor(private authService: UserService, 
              private router: Router,
              private route: ActivatedRoute) {    
   }
  

  ngOnInit(): void {
    //console.log("Detail>>>" + this.account.id);
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;    
    this.accountForm = new FormGroup({
      username: new FormControl('',[ 
        Validators.required, 
        Validators.minLength(3)]),
      email: new FormControl('', Validators.required)    
    });

    if (!this.isAddMode) {
      this.authService.getUserById(this.id)
          .pipe(first())
          .subscribe(x => this.accountForm.patchValue(x));
    }
  }

  get username(){
    return this.accountForm.get('username');    
  }
  get email(){
    return this.accountForm.get('email');    
  }
  get formControls() { return this.accountForm.controls; }

  onSubmit() {
    console.log("On Submit");
    this.submitted = true;
    if(this.accountForm.invalid){
      return;
    }
    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
        this.updateUser();
    }
  }
  private createUser() {
    // this.authService.createNewUser(this.accountForm.value)
    //     .pipe(first())
    //     .subscribe({
    //         next: () => {
                
    //             this.router.navigate(['../'], { relativeTo: this.route });
    //         },
    //         error: error => {
    //             //this.alertService.error(error);
    //             this.loading = false;
    //         }
    //     });
}
private updateUser(){

}


}
