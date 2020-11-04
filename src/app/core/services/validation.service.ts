import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject, of } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { catchError, map, tap, distinctUntilChanged } from 'rxjs/operators';
import { User } from '../models/user';
import { ApiEndpoints } from '../utilities/Constants';
import { DataType, Validation } from '../models/validation';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
  ) { }

  getValidations(): Observable<Validation[]> {
    return this.apiService.get(ApiEndpoints.VALIDATIONS)
      .pipe(map(
        data => { return data; }
      ));
  }

  getDataTypes(): Observable<DataType[]> {
    return this.apiService.get(ApiEndpoints.DATATYPES)
      .pipe(map(
        data => { return data; }
      ));
  }
}