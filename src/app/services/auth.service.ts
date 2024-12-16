import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (this.checkSessionStorageIsAvailable()) {
      if (username && password ) {
        sessionStorage.setItem('portfolioproUser', username);
        return true;
      }
    }
    return false;
  }

  isUserLoggedIn() {
    if (this.checkSessionStorageIsAvailable()) {
      let user = sessionStorage.getItem('portfolioproUser');
    return !(user === null);
    }
    return false;
  }

  logout() {
    if (this.checkSessionStorageIsAvailable()) {
      sessionStorage.removeItem('portfolioproUser');
    }
  }

  checkSessionStorageIsAvailable() {
    return typeof window !== 'undefined' && window.sessionStorage;
  }
}
