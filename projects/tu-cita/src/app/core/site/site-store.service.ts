import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Site } from '../../shared/interfaces/site.class';
import { SiteApiService } from './site-api.service';

@Injectable({
  providedIn: 'root'
})
export class SiteStoreService {
  private selectedSiteSubject = new BehaviorSubject(null);
  public selectedSite$ = this.selectedSiteSubject.asObservable();
  private sitesSubject = new BehaviorSubject<Site[]>([]);
  public sites$ = this.sitesSubject.asObservable();

  public constructor(private siteApiService: SiteApiService) {}

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
      .getSites()
      .pipe(tap((sites) => this.sitesSubject.next(sites)))
      .subscribe();
  }

  public loadSiteById(id: string): void {
    this.siteApiService
      .getSiteById(id)
      .pipe(tap((site) => this.selectedSiteSubject.next(site)))
      .subscribe();
  }
}
