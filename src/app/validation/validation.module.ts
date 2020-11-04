import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationRoutingModule } from './validation-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { ValidationComponent } from './validation/validation.component';
import { MatchingComponent } from './matching/matching.component';
import { PaymentComponent } from './payment/payment.component';
import { NewValidationComponent } from './new-validation/new-validation.component';
import { DrapDropDirective } from './new-validation/drap-drop.directive';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ValidationComponent, LoadingComponent, MatchingComponent, PaymentComponent, NewValidationComponent, DrapDropDirective],
  imports: [
    CommonModule,
    ValidationRoutingModule,
    NgbModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ValidationModule { }
