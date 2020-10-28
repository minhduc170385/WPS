import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RouterLink } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const users = [     
      { id: 1, username: 'duc', role: "admin", email: 'duc', password: 'abc', token: '1234' },
      { id: 2, username: 'sau', role: "user", email: 'sau', password: 'abc', token: '1234' },
      { id: 3, username: 'tien', role: "user", email: 'tien', password: 'abc', token: '1234' }
      
    ];
    return {users};
  }

  constructor() { }
}
