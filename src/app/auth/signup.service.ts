import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private token: string;
  url = 'http://localhost:3000/api';
  constructor( private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post('http://localhost:3000/api/users/signup', authData)
    .subscribe( Response => {
      console.log(Response);
    });
  }

  loginUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post<{ token: string}>('http://localhost:3000/api/users/login', authData)
    .subscribe( Response => {
      const token = Response.token;
      this.token = token;
    });
  }
}
