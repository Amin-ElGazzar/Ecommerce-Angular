import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Const/Environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  headers: any = {
    token: localStorage.getItem('userToken'),
  };
  constructor(private _httpClient: HttpClient) { console.log(this.headers);
  }
  addToCart(productId: string): Observable<any> {
    return this._httpClient.post(
      `${baseUrl}/api/v1/cart`,
      { productId: productId },
      { headers: this.headers }
    );
  }

  getUserCart(): Observable<any> {
    return this._httpClient.get(`${baseUrl}/api/v1/cart`, {
      headers: this.headers,
    });
  }
}
