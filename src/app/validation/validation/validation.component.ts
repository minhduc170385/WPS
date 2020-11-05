import { Component, OnInit } from '@angular/core';
import { Router, RouterLink,ActivatedRoute,NavigationEnd } from '@angular/router';
import { AppRoutes } from '../../core/utilities/Constants';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  
  active = 1;
  showNewValidation = false; 
  constructor(private router: Router,
    private route: ActivatedRoute ) {
    }

  ngOnInit(): void { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNewValidation = this.route.firstChild.snapshot.data.showNewValidation !== false;       
      }
    });
   }

  onNewValidationClick(){
    console.log("new Validation");
    this.showNewValidation = true;
    
    //this.router.navigateByUrl(AppRoutes.VALIDATING_PAYMENT);
  }


}
