import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Site } from '../interfaces/site.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SiteApiSercice {
  public constructor(private httpClient: HttpClient) {}

  public fetchSites(): Observable<Site[]> {
    return this.httpClient.get<Site[]>(`${environment.apiUrl}/units`).pipe(
      map((sites) => {
        return sites.map((site) => ({ ...site, position: { lat: 41.3819571, lng: 2.1719914 } }));
      })
    );
  }
}
