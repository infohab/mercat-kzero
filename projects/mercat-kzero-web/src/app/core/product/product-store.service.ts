import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'mercat-kzero-lib';
import { ProductApiService } from 'mercat-kzero-lib';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  public constructor(private productApiService: ProductApiService) {}

  public getProductList(): Observable<Product[]> {
    return this.productApiService.getProducts().pipe(tap((products: Product[]) => this.productsSubject.next(products)));
  }
}
