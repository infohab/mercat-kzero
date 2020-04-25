import { Component, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../../core/cart/cart.service';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderCartComponent {
  constructor(public cartService: CartService) {}

  getCartBadge(cartItemsLength: number): string | null {
    return cartItemsLength > 0 ? cartItemsLength.toString() : null;
  }
}
