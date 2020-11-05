import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { max } from 'rxjs/operators';
import { AppRoutes } from 'src/app/core/utilities/Constants';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  
  activeLinkIndex = 0;
  
  links = [
    { title: 'Data Loads', link: AppRoutes.VALIDATING_LOADING, index: 0 },
    { title: 'Data Matching', link: AppRoutes.VALIDATING_MATCHING, index: 1 },
    { title: 'Payment & Invoicing', link: AppRoutes.VALIDATING_PAYMENT, index: 2 }
  ];
  
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {  
    this.router.events.subscribe((res) => {
      this.setActiveLinkIndex()
    });
    this.setActiveLinkIndex()
  }

  setActiveLinkIndex() {
    this.activeLinkIndex = Math.max(this.links.indexOf(this.links.find(tab => tab.link === this.router.url.split('/').pop())), 0);
    console.log(this.router.url.split('/').pop()+ " " + this.activeLinkIndex)
  }

}
