import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', '../shared/styles/shared.scss']
})
export class LandingPageComponent {
  get year(): number {
    return new Date().getFullYear();
  }

}
