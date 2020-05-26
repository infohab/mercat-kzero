import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Unit } from '../interfaces/unit.interface';
import { map } from 'rxjs/operators';
import { Site } from '../../shared/interfaces/site.class';

export function hardCodePositionToSite(site: Unit): Unit {
  return site;
}

@Injectable({
  providedIn: 'root'
})
export class SiteApiService {
  public constructor(private httpClient: HttpClient) {}

  public getSites(): Observable<Site[]> {
    return this.fetchSites().pipe(
      map((sites) => {
        return sites.map(Site.parseFromUnit);
      })
    );
  }

  public getSiteById(siteId: string): Observable<Site> {
    return this.fetchSiteById(siteId).pipe(map(Site.parseFromUnit));
  }

  private fetchSites(): Observable<Unit[]> {
    return this.httpClient.get<Unit[]>(`${environment.apiUrl}/units`);
  }

  private fetchSiteById(siteId: string): Observable<Unit> {
    return this.httpClient.get<Unit>(`${environment.apiUrl}/units/${siteId}`).pipe(map(hardCodePositionToSite));
  }
}
