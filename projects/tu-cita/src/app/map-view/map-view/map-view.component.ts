import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapViewComponent {
  public constructor(private router: Router) {}

  public onMarkerClicked(event): void {
    console.log(event);
    this.router.navigateByUrl('/');
  }
}
