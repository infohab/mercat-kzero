import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producer } from './producer.interface';
import { producersMock } from './producers-mock';

@Injectable({
  providedIn: 'root'
})
export class ProducerApiService {
  public getProducers(): Observable<Producer[]> {
    return of(producersMock);
  }
}
