import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-header-language-selector',
  templateUrl: './header-language-selector.component.html',
  styleUrls: ['./header-language-selector.component.scss'],
})
export class HeaderLanguageSelectorComponent {
  public constructor(private platformLocation: PlatformLocation) {}

  public handleLanguageRedirect(languageCode: string): void {
    window.location.href = `${(this.platformLocation as any).location.origin}/${languageCode}`;
  }
}
