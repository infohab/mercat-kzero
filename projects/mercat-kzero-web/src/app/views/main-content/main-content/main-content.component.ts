import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductListComponent } from '../../product/product-list/product-list.component';
import { Producer } from '../../../core/producer/producer.interface';
import { filter, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
  constructor(private matDialog: MatDialog, private matSnackBar: MatSnackBar, private router: Router) {}

  public onMarkerClicked(producer: Producer): void {
    const orchardDetailsDialog = this.matDialog.open(ProductListComponent, {
      data: producer,
    });

    orchardDetailsDialog
      .afterClosed()
      .pipe(
        filter((response) => response),
        tap((response) => {
          this.handleBasketRedirection(response.producer, response.basket);
        })
      )
      .subscribe();
  }

  public handleBasketRedirection(producer, basket): void {
    if (basket.id === 0) {
      this.router.navigateByUrl('/products');
    } else {
      this.matSnackBar.open('Feature is under development!', null, { duration: 2000 });
    }
  }
}
