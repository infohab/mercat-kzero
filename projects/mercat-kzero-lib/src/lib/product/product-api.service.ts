import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { productsMock } from './product-mock';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  public getProducts(): Observable<Product[]> {
    return of(productsMock);
  }
}
