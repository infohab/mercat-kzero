import { Injectable } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../product/product.interface';

export interface CartItem {
  amount: number;
  product: Product;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: SelectionModel<CartItem> = new SelectionModel<CartItem>(true);
  public totalPrice = new BehaviorSubject(0);
  public totalAmount = new BehaviorSubject(0);
  public onItemRemoved = new Subject<CartItem>();

  public updateCart(productToUpdate: Product, amount: number): void {
    const cartItem = this.isActiveOnCart(productToUpdate);
    if (cartItem) {
      this.updateAmount(cartItem, amount);
    } else {
      this.addCartItem(productToUpdate, amount);
    }
    this.updateCalculatedValues();
  }

  public deselect(cartItem): void {
    this.cartItems.deselect(cartItem);
    this.updateCalculatedValues();
    this.onItemRemoved.next(cartItem);
  }

  private isActiveOnCart(product: Product): CartItem {
    return this.cartItems.selected.find((cartItem) => cartItem.product.id === product.id);
  }

  private updateAmount(cartItem: CartItem, amount: number): void {
    if (+amount < 1) {
      this.cartItems.deselect(cartItem);
    } else {
      cartItem.amount = amount;
    }
  }

  private addCartItem(product: Product, amount: number): void {
    if (amount > 0) {
      this.cartItems.select({ product, amount });
    }
  }

  private updateCalculatedValues(): void {
    let totalPrice = 0;
    let totalAmount = 0;
    this.cartItems.selected.forEach((cartItem) => {
      totalAmount += cartItem.amount;
      totalPrice = totalPrice + cartItem.product.price * cartItem.amount;
    });

    this.totalPrice.next(totalPrice);
    this.totalAmount.next(totalAmount);
  }
}
