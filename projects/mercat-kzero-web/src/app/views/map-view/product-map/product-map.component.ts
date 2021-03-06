import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { google } from 'google-maps';
import { mapStyles } from './map-styles';
import { ProducerStoreService } from '../../../core/producer/producer-store.service';
import { Producer } from 'mercat-kzero-lib';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-product-map',
  templateUrl: './product-map.component.html',
  styleUrls: ['./product-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductMapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) public gmap: ElementRef;
  @Output() public markerClicked = new EventEmitter();
  private lat = 41.387124;
  private lng = 2.170037;
  private map: google.maps.Map;
  private coordinates = new google.maps.LatLng(this.lat, this.lng);
  private mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
    scrollwheel: false,
    gestureHandling: 'cooperative',
    styles: mapStyles
  };

  private producers: Producer[];

  public constructor(private producerStoreService: ProducerStoreService) {}

  public ngOnInit(): void {
    this.producerStoreService.getProducerList().subscribe();
    this.producerStoreService.producers$.pipe(debounceTime(300), distinctUntilChanged()).subscribe((producers) => {
      this.producers = producers || [];
      this.addMarkers();
    });
  }

  public ngAfterViewInit(): void {
    this.mapInitializer();
    if (this.producers && this.producers.length) {
      this.addMarkers();
    }
  }

  private mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  }

  private addMarkers(): void {
    const icon = 'assets/icons/kzero-pin.png';
    this.producers.forEach((producer) => {
      const [lat, lon] = producer.position;
      const markerData = {
        ...producer,
        position: new google.maps.LatLng(lat, lon),
        icon
      };
      const marker = new google.maps.Marker(markerData);
      marker.addListener('click', () => this.onMarkerClick(producer));
      marker.setMap(this.map);
    });
  }

  private onMarkerClick(producer): void {
    this.producerStoreService.selectedProducer = producer;
    this.markerClicked.emit(producer);
  }
}
