import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalAreaComponent } from './global-area/global-area.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderContactComponent } from './header-contact/header-contact.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { HeaderLanguageSelectorComponent } from './header-language-selector/header-language-selector.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { RouterModule } from '@angular/router';
import { HeaderCartComponent } from './header-cart/header-cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { SerachByAreaComponent } from './serach-by-area/serach-by-area.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GlobalAreaComponent,
    HeaderContactComponent,
    HeaderSearchComponent,
    HeaderProfileComponent,
    HeaderLanguageSelectorComponent,
    HeaderLinksComponent,
    HeaderLogoComponent,
    HeaderCartComponent,
    SerachByAreaComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule
  ],
  exports: [GlobalAreaComponent]
})
export class GlobalAreaModule {}
