import { NewValidationComponent } from './../new-validation/new-validation.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { DataType, Status, Validation } from 'src/app/core/models/validation.model';
import { ValidationService } from 'src/app/core/services/validation.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationListConfig } from 'src/app/core/models/validation-list-config.model';
import { param } from 'jquery';
import { Router, RouterLink,ActivatedRoute,NavigationEnd } from '@angular/router';
import { AppRoutes } from '../../core/utilities/Constants';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  validations = [];
  dataTypes = []
  statuses = [Status.inprogress, Status.failed, Status.passed]

  page = 1;
  pageSize = 4;
  collectionSize = 3;

  isLoading = true

  searchForm: FormGroup

  query: ValidationListConfig 
  
  //showNewValidation = false
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private validationService: ValidationService,
    private fb: FormBuilder
  ) {

    this.searchForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      dataType: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.queryValidations()
    this.getDataTypes()
   
  }

  queryValidations(params: ValidationListConfig=null) {
    this.isLoading = true
    this.validationService.getValidations(params).subscribe(validations => {
      this.isLoading = false
      this.validations = validations
      this.validations.map((country, i) => ({ id: i + 1, ...country }))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
    })
  }

  getDataTypes() {
    this.validationService.getDataTypes().subscribe(datatypes =>
      this.dataTypes = datatypes
    )
  }

  setPageTo() {
    this.queryValidations(this.query)
  }


  search() {
    this.query = {
      step : "",
      from : this.searchForm.get("fromDate").value,
      to : this.searchForm.get("toDate").value,
      dataType : this.searchForm.get("dataType").value,
      status : this.searchForm.get("status").value
    }
    console.log(this.query)
    this.queryValidations(this.query)
  }

  isValid() {
    for (const field in this.searchForm.controls) { // 'field' is a string
      if (this.searchForm.controls[field].valid) {
        return true
      }
      return false
    }
  } 
}
