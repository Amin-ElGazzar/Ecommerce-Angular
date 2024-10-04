import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Const/Environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this._httpClient.get(`${baseUrl}/api/v1/categories`);
  }
}
