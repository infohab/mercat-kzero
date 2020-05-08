import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { productsMock } from './product-mock';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>(productsMock);
  public products$ = this.productsSubject.asObservable();
}
