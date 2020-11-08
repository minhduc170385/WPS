import { NewValidationComponent } from './new-validation/new-validation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { AuthGuard } from '../core/services/auth.guard';
import { ValidationComponent } from './validation/validation.component';
import { AppRoutes } from '../core/utilities/Constants';
import { MatchingComponent } from './matching/matching.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {
    path: '',
    component: ValidationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LoadingComponent,
        data:{showNewValidation:false}
      },
      {
        path: AppRoutes.VALIDATING_LOADING,
        component: LoadingComponent
      },
      {
        path: AppRoutes.VALIDATING_MATCHING,
        component: MatchingComponent
      },
      {
        path: AppRoutes.VALIDATING_PAYMENT,
        component: PaymentComponent
      },
      {
        path: AppRoutes.NEW_VALIDATION,
        component: NewValidationComponent
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRoutingModule { }
