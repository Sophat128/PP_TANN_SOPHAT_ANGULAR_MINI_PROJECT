import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor() { }
isAuthenticated(){
    return this.isLoggedIn;
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
