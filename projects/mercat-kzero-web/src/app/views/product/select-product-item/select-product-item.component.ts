import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartStoreService } from '../../../core/cart/cart-store.service';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Product } from 'mercat-kzero-lib';

@Component({
  selector: 'app-select-product-item',
  templateUrl: './select-product-item.component.html',
  styleUrls: ['./select-product-item.component.scss']
})
export class SelectProductItemComponent implements OnInit, OnChanges {
  @Input() public product: Product;
  public amount: FormControl;

  public constructor(private cartStoreService: CartStoreService) {}

  public ngOnInit(): void {
    this.amount.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((value: number) => {
          let validValue = value;
          if (value < 0) {
            validValue = 0;
            this.amount.setValue(validValue);
          } else if (value > this.product.availableStock) {
            validValue = this.product.availableStock;
            this.amount.setValue(validValue);
          }

          return validValue;
        }),
        tap(() => {
          if (this.amount.valid) {
            this.cartStoreService.updateCart(this.product, +this.amount.value);
          }
        })
      )
      .subscribe();

    this.cartStoreService.onItemRemoved
      .pipe(
        tap((item) => {
          if (item.product.id === this.product.id) {
            this.amount.setValue(0);
          }
        })
      )
      .subscribe();
  }

  public ngOnChanges(): void {
    this.amount = new FormControl(0, [
      Validators.required,
      Validators.min(0),
      Validators.max(this.product.availableStock)
    ]);
  }

  public decrement() {
    if (+this.amount.value > 0) {
      this.amount.setValue(+this.amount.value - 1);
    }
  }

  public increment() {
    if (this.amount.value < this.product.availableStock) {
      this.amount.setValue(+this.amount.value + 1);
    }
  }
}
