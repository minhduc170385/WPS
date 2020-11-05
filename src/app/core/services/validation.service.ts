import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { ApiService } from './api.service';
import {  map } from 'rxjs/operators';
import { ApiEndpoints } from '../utilities/Constants';
import { DataType, Validation } from '../models/validation.model';
import { ValidationListConfig } from '../models/validation-list-config.model';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
  ) { }

  getValidations(config: ValidationListConfig=null): Observable<Validation[]> {
    const params = {};

    if (config != null) {
      Object.keys(config)
      .forEach((key) => {
        params[key] = config[key];
      });
    }

    return this.apiService.get(ApiEndpoints.VALIDATIONS, new HttpParams({ fromObject: params }))
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