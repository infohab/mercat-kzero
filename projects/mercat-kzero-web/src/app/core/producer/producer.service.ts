import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { producersMock } from './producers-mock';
import { Producer } from './producer.interface';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  private selectedProducerSubject = new BehaviorSubject(null);
  private producersSubject = new BehaviorSubject<Producer[]>(producersMock);
  public producers$ = this.producersSubject.asObservable();

  public get producers(): Producer[] {
    return this.producersSubject.getValue();
  }

  public get selectedProducer(): Producer {
    return this.selectedProducerSubject.getValue();
  }

  public set selectedProducer(producer: Producer) {
    this.selectedProducerSubject.next(producer);
  }
}
