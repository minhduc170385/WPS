import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject, of } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { catchError, map, tap, distinctUntilChanged } from 'rxjs/operators';
import { User } from '../models/user.model';
import { ApiEndpoints } from '../utilities/Constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  // private currentUserSubject = new ReplaySubject<User>(1);
  // public currentUser = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get(`${ApiEndpoints.USERS}/1`)
        .subscribe(
          data => this.setAuth(data),
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(credentials): Observable<User> {
    // const route = '/login';
    // return this.apiService.post('/users' + route, {user: credentials})
    // .pipe(map( 
    // data => {
    //   this.setAuth(data.user);
    //   return data;
    // }
    // ));

    // TODO: send the message _after_ fetching the hero
    return this.apiService.get(`${ApiEndpoints.USERS}/1`)
      .pipe(map(
        data => {
          this.setAuth(data);
          return data;
        }
      ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
      .put(ApiEndpoints.USERS, { user })
      .pipe(map(data => {
        // Update the currentUser observable
        this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }

  getAccounts(): Observable<User[]> {
    return this.apiService.get(ApiEndpoints.USERS)
      .pipe(map(
        data => { return data; }
      ));
  }

  getUserById(id: number): Observable<User> {
    let url = `/users/${id}`;
    return this.apiService.get(url)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }


  apiURL = 'https://my-json-server.typicode.com/minhduc170385/User/User';  // URL to web api  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  create(userAccount: User): Observable<User> {
    console.log(">>>>" + userAccount.username + "  - " + userAccount.email);
    return this.http.post<User>(this.apiURL + '/posts/', JSON.stringify(userAccount), this.httpOptions)
      .pipe(
        //catchError(this.errorHandler)
      )
  }

  updateUser(id: number, userAccount: User): Observable<User> {
    console.log("number:" + id + "---- User:" + userAccount.username);
    return this.http.put<User>(this.apiURL + '/posts/' + id, JSON.stringify(userAccount), this.httpOptions)
      .pipe(
        //catchError(this.errorHandler)
      )
  }
  delete(id: number) {
    return this.http.delete<User>(this.apiURL + '/posts/' + id, this.httpOptions)
      .pipe(
        //catchError(this.errorHandler)
      )

  }


}
