import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../Const/Environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
 
  cartItemNumber = new BehaviorSubject(0)
  constructor(private _httpClient: HttpClient) {
    this.getCartItems().subscribe({
      next: (res) => {
        this.cartItemNumber.next(res.numOfCartItems)
      }
    })
  }

  addToCart(productId: string): Observable<any> {
    return this._httpClient.post(
      `${baseUrl}/api/v1/cart`,
      { productId: productId }
    );
  }

  getCartItems(): Observable<any> {
    return this._httpClient.get(`${baseUrl}/api/v1/cart`);
  }

  updateItemCount(productId: string, count: number): Observable<any> {
    return this._httpClient.put(
      `${baseUrl}/api/v1/cart/${productId}`,
      { count: count }
    );
  }
  deleteCartItem(productId: string): Observable<any> {
    return this._httpClient.delete(`${baseUrl}/api/v1/cart/${productId}`);
  }

  onlinePayment(shippingAddress: any, url: string, cartId: any) {
    return this._httpClient.post(`${baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${url}/home`,
      { shippingAddress: shippingAddress });
  }
}
