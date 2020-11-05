import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/core/utilities/Constants';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  
  active = 1;
 
  links = [
    { title: 'Data Loads', fragment: 'loading', link: AppRoutes.VALIDATING_LOADING  },
    { title: 'Data Matching', fragment: 'matching', link: AppRoutes.VALIDATING_MATCHING },
    { title: 'Payment & Invoicing', fragment: 'payement', link: AppRoutes.VALIDATING_PAYMENT }
  ];
  
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {  }

}
