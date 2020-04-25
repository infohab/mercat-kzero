import { Component, Inject } from '@angular/core';
import { products } from './products';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producer } from 'mercat-kzero-lib';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public products = products;

  constructor(@Inject(MAT_DIALOG_DATA) public producer: Producer) {}
}
