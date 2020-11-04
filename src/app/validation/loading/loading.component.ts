import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { DataType, Status, Validation } from 'src/app/core/models/validation';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };
  
  validations = [];
  dataTypes = []
  statuses = [Status.inprogress, Status.failed, Status.passed]

  page = 1;
  pageSize = 4;
  collectionSize = 10;

  constructor(private validationService: ValidationService) {}

  ngOnInit() {
    this.refreshValidations()
    this.getDataTypes()
  }

  navigateEvent(event) {
    this.date = event.next;
  }

  refreshValidations() {
    this.validationService.getValidations().subscribe( validations => {
      this.validations = validations
      this.validations.map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
    })
  }

  getDataTypes() {
    this.validationService.getDataTypes().subscribe( datatypes =>
      this.dataTypes = datatypes
    )
  }
}
