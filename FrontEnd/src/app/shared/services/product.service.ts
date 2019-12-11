import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  private FAKE_API = `http://localhost:3000/products/`;

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.FAKE_API}${productId}`);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.FAKE_API);
  }
}
