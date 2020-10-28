import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


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
    return {users};
  }

  constructor() { }
}
