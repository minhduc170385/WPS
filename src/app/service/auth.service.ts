import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accountUrl = 'https://my-json-server.typicode.com/minhduc170385/User/Users';  // URL to web api
  public user: Observable<User>;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`LoginService: ${message}`);
}

/** GET heroes from the server */
/** GET hero by id. Will 404 if id not found */
getUserById(id: number): Observable<User> {

  const url = `${this.accountUrl}/${id}`;
  return this.http.get<User>(url).pipe(
    tap(_ => this.log(`fetched account id=${id}`)),
    catchError(this.handleError<User>(`account id=${id}`))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}



  // public authUser(user:any){
  //   let UserArray=[];
  //   if(localStorage.getItem('Users')){
  //     UserArray = JSON.parse(localStorage.getItem('Users'));
  //   }
  //   return UserArray.find(p => p.userName === user.userName && p.password === user.password);
  // }

  
searchHeroes(term: string): Observable<User[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<User[]>(`${this.accountUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<User[]>('searchHeroes', []))
  );
}
  public login(userData: User):  Observable<User>{
    let username=userData.email;
    let password=userData.password;
    let id=1;
    //console.log(">>>>>>>>>" + userData.username);
    
  
    const url = `${this.accountUrl}/${id}`;
    console.log(url);
    
    return this.http.get<User>(url).pipe(
      // tap(res => { 

      //   //localStorage.setItem('ACCESS_TOKEN', "access_token");
      //   console.log("XXXXXXXXX" + res);
      //   this.log('xxxxx' + res)
      // }),
      tap(_ => {
          localStorage.setItem('ACCESS_TOKEN', "access_token");
          this.log('fetched user');
        }),
      
      catchError(this.handleError<User>(`getHero id=${id}`))
    );

    // return this.http.get<User[]>(`${this.heroesUrl}/?name=${username}`).pipe(
    //   tap(x => x.length ?
    //      this.log(`found heroes matching "${username}"`) :
    //      this.log(`no heroes matching "${username}"`)),         
    //   catchError(this.handleError<User[]>('searchHeroes', []))
    // );

    //const url = `${this.heroesUrl}/${id}`;
    // console.log(">>>>>>>>>>>" + url);
    // return this.http.get<User>(url).pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<User>(`getHero id=${id}`))
    // );

    //localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;  
  }  

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }


  getAccounts(): Observable<User[]> {
    return this.http.get<User[]>(this.accountUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<User[]>('getAccounts', []))
      );
  }


}
