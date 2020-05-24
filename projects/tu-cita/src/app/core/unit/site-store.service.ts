import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Site } from '../interfaces/site.interface';
import { SiteApiSercice } from './site-api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SiteStoreService {
  private selectedSiteSubject = new BehaviorSubject(null);
  public selectedSite$ = this.selectedSiteSubject.asObservable();
  private sitesSubject = new BehaviorSubject<Site[]>([]);
  public sites$ = this.sitesSubject.asObservable();

  public constructor(private siteApiService: SiteApiSercice) {}

  public get sites(): Site[] {
    return this.sitesSubject.getValue();
  }

  public get selectedSite(): Site {
    return this.selectedSiteSubject.getValue();
  }

  public set selectedSite(site: Site) {
    this.selectedSiteSubject.next(site);
  }

  public loadSites(): void {
    this.siteApiService
      .fetchSites()
      .pipe(tap((sites) => this.sitesSubject.next(sites)))
      .subscribe();
  }

  public loadSiteById(id: string): void {
    this.siteApiService
      .fetchSiteById(id)
      .pipe(tap((site) => this.selectedSiteSubject.next(site)))
      .subscribe();
  }
}
