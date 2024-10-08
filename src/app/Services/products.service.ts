import { baseUrl } from './../Const/Environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getProduct(): Observable<any> {
    return this._httpClient.get(`${baseUrl}/api/v1/products`);
  }
  getProductDetails(productId: string): Observable<any> {
    return this._httpClient.get(`${baseUrl}/api/v1/products/${productId}`);
  }
}
