import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-validation',
  templateUrl: './new-validation.component.html',
  styleUrls: ['./new-validation.component.css']
})
export class NewValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

}
