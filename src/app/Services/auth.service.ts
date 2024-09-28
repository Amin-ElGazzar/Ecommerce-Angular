import { baseUrl } from './../Const/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.decodedToken();
    }
  }
  register(model: object): Observable<any> {
    return this._httpClient.post('${baseUrl}/api/v1/auth/signup', model);
  }

  login(model: object): Observable<any> {
    return this._httpClient.post(`${baseUrl}/api/v1/auth/signin`, model);
  }

  decodedToken() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }
}
