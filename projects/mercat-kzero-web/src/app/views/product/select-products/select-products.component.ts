import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../../core/product/product.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectProductsComponent implements OnInit {
  public step = 0;
  public productsSubject = new Subject<string[]>();
  public groupedProducts;

  public constructor(public productService: ProductService) {}

  public setStep(index: number) {
    this.step = index;
  }

  public ngOnInit(): void {
    this.productService.products$
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        map((products) => this.groupProductsByType(products))
      )
      .subscribe();
  }

  private groupProductsByType(products) {
    this.groupedProducts = this.groupBy(products, 'productType');
    this.productsSubject.next(Object.keys(this.groupedProducts));
  }

  private groupBy(customArray: any[], searchKey: string) {
    return customArray.reduce((resultantObject, index) => {
      (resultantObject[index[searchKey]] = resultantObject[index[searchKey]] || []).push(index);
      return resultantObject;
    }, {});
  }
}
