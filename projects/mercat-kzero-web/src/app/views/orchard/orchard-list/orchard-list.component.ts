import { Component, ViewEncapsulation } from '@angular/core';
import { ProducerStoreService } from '../../../core/producer/producer-store.service';

@Component({
  selector: 'app-orchard-list',
  templateUrl: './orchard-list.component.html',
  styleUrls: ['./orchard-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrchardListComponent {
  public constructor(public producerStoreService: ProducerStoreService) {}
}
