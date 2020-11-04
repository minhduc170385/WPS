import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RouterLink } from '@angular/router';
import { DataType, Status, Step } from '../models/validation.model';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const users = [     
      { id: 1, username: 'duc', email: 'duc@fsoft.com', password: 'abc',role:'admin',active:true, token: '1234' },
      { id: 2, username: 'sau', email: 'sau@fsoft.com', password: 'abc',role:'user',active:true, token: '1234' },
      { id: 3, username: 'tien', email: 'tien@fsoft.com', password: 'abc',role:'user',active:false, token: '1234' }
    ];
    const validations = [
      { id: 1, dataType: {name: "member", step: Step.loading}, inputFileName: "file 1", inputFilePath: "1", runTime: new Date(), status: Status.inprogress, },
      { id: 2, dataType: {name: "auth", step: Step.loading}, inputFileName: "file 2", inputFilePath: "2", runTime: new Date(), status: Status.failed, },
      { id: 3, dataType: {name: "ohi", step: Step.loading}, inputFileName: "file 3", inputFilePath: "3", runTime: new Date(), status: Status.passed, },
    ];
    const datatypes = [
      {name: "member", step: Step.loading},
      {name: "auth", step: Step.loading},
      {name: "ohi", step: Step.loading},
    ]
    return {users, validations, datatypes};
  }

  constructor() { }
}
