import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconConfigurationService {
  private readonly _iconPath = './assets/icons/';

  constructor(_iconRegistry: MatIconRegistry, _sanitizer: DomSanitizer) {
    _iconRegistry.addSvgIcon(
      'google',
      _sanitizer.bypassSecurityTrustResourceUrl(this._iconPath + 'google.svg'),
    );
    _iconRegistry.addSvgIcon(
      'facebook',
      _sanitizer.bypassSecurityTrustResourceUrl(
        this._iconPath + 'facebook.svg',
      ),
    );
    _iconRegistry.addSvgIcon(
      'twitter',
      _sanitizer.bypassSecurityTrustResourceUrl(this._iconPath + 'twitter.svg'),
    );
  }
}
