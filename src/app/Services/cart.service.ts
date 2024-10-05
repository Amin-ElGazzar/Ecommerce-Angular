import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Const/Environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  headers: any = {
    Token: localStorage.getItem('userToken'),
  };
  constructor(private _httpClient: HttpClient) {}
  addToCart(productId: string): Observable<any> {
    return this._httpClient.post(
      `${baseUrl}/api/v1/cart`,
      { productId: productId },
      { headers: this.headers }
    );
  }
}
