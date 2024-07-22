import {Component} from '@angular/core';
import {IconConfigurationService} from './core/services/icon-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mechanicapp-frontend';

  private iconsPath = './src/assets/icons';

  constructor(private iconConfiguration: IconConfigurationService) {
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
}
