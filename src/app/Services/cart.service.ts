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
  constructor(private _httpClient: HttpClient) {}

  addToCart(productId: string): Observable<any> {
    return this._httpClient.post(
      `${baseUrl}/api/v1/cart`,
      { productId: productId },
      { headers: this.headers }
    );
  }

  getCartItems(): Observable<any> {
    return this._httpClient.get(`${baseUrl}/api/v1/cart`, {
      headers: this.headers,
    });
  }

  updateItemCount(productId: string, count: number): Observable<any> {
    return this._httpClient.put(
      `${baseUrl}/api/v1/cart/${productId}`,
      { count: count },
      { headers: this.headers }
    );
  }
  deleteCartItem(productId: string): Observable<any> {
    return this._httpClient.delete(`${baseUrl}/api/v1/cart/${productId}`, {
      headers: this.headers,
    });
  }
}
