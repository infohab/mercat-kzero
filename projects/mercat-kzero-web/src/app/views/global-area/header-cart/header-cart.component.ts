import { Component, ViewEncapsulation } from '@angular/core';
import { CartStoreService } from '../../../core/cart/cart-store.service';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderCartComponent {
  constructor(public cartStoreService: CartStoreService) {}

  getCartBadge(cartItemsLength: number): string | null {
    return cartItemsLength > 0 ? cartItemsLength.toString() : null;
  }
}
