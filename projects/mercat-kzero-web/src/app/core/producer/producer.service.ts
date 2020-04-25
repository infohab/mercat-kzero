import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producer } from 'mercat-kzero-lib';
import { ProducerApiService } from 'mercat-kzero-lib';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  private selectedProducerSubject = new BehaviorSubject(null);
  private producersSubject = new BehaviorSubject<Producer[]>([]);
  public producers$ = this.producersSubject.asObservable();

  public constructor(private producerApiService: ProducerApiService) {}

  public getProducerList(): Observable<Producer[]> {
    return this.producerApiService
      .getProducers()
      .pipe(tap((producers: Producer[]) => this.producersSubject.next(producers)));
  }

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
