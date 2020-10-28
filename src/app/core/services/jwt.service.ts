import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(): String {

    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    let myObj = {Id:1, username: 'duc', email:'minhduc@fsoft.com.vn',role:'Admin'};
    localStorage.setItem('CurrentAccount', JSON.stringify(myObj));

    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
