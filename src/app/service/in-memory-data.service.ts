import { User } from './../user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const users = [     
      { id: 11, email: 'duc', password: 'abc' },
      { id: 12, email: 'sau', password: 'abc' },
      { id: 13, email: 'tien', password: 'abc' }
      
    ];
    return {users};
  }

  constructor() { }
}
