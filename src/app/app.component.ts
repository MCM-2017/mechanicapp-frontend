import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mechanicapp-frontend';

  private iconsPath = './src/assets/icons';

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
  ) {
    // this._matIconRegistry.addSvgIcon(
    //   'svgGoogle',
    //   this.setPath(`${this.iconsPath}/google.svg`),
    // );
    // this._matIconRegistry.addSvgIcon(
    //   'svgFacebook',
    //   this.setPath(`${this.iconsPath}/facebook.svg`),
    // );
    // this._matIconRegistry.addSvgIcon(
    //   'svgTwitter',
    //   this.setPath(`${this.iconsPath}/twitter.svg`),
    // );
  }

  private setPath(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
