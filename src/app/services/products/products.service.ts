import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Product {
  productId: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  detailsOrder: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(page = 1): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url}/api/products`);
  };
}
