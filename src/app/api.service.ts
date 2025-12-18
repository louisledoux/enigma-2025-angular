import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from './models/product.interface';
import { Observable, tap } from 'rxjs';

type ProductResponse = {
  data: Product[];
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);
  private baseApiUrl = 'http://localhost:3000';

  private _products = signal<Product[]>([]);
  products = this._products.asReadonly();

  fetchProducts() {
    return this.httpClient
      .get<ProductResponse>(`${this.baseApiUrl}/products`)
      .pipe(tap((products) => this._products.set(products.data)));
  }
}
