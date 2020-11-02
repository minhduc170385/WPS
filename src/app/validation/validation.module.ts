import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationRoutingModule } from './validation-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { ValidationComponent } from './validation/validation.component';
import { MatchingComponent } from './matching/matching.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [ValidationComponent, LoadingComponent, MatchingComponent, PaymentComponent],
  imports: [
    CommonModule,
    ValidationRoutingModule
  ]
})
export class ValidationModule { }
