import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  ViewEncapsulation,
  Input,
  OnChanges
} from '@angular/core';
import { google } from 'google-maps';
import { mapStyles } from './map-styles';

@Component({
  selector: 'app-product-map',
  templateUrl: './product-map.component.html',
  styleUrls: ['./product-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductMapComponent implements OnChanges, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) public gmap: ElementRef;
  @Output() public markerClicked = new EventEmitter();
  @Input() public data = [
    {
      position: {
        lat: 41.387124,
        lng: 2.170037
      }
    }
  ];
  private lat = 41.387124;
  private lng = 2.170037;
  private map: google.maps.Map;
  private coordinates = new google.maps.LatLng(this.lat, this.lng);
  private mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
    scrollwheel: false,
    gestureHandling: 'cooperative',
    styles: mapStyles,
    mapTypeControl: false
  };

  public ngOnChanges(): void {
    this.addMarkers();
  }

  public ngAfterViewInit(): void {
    this.mapInitializer();
    if (this.data && this.data.length) {
      this.addMarkers();
    }
  }

  private mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  }

  private addMarkers(): void {
    const icon = 'assets/icons/map-pin.png';
    this.data.forEach((site) => {
      const marker = new google.maps.Marker({ ...site, icon });
      marker.addListener('click', () => this.onMarkerClick(site));
      marker.setMap(this.map);
    });
  }

  private onMarkerClick(site): void {
    this.markerClicked.emit(site);
  }
}
