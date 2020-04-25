import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-global-area',
  templateUrl: './global-area.component.html',
  styleUrls: ['./global-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalAreaComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
