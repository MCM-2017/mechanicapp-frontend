import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', '../shared/styles/shared.scss'],
  standalone: true,
  imports: [RouterLink, MatButton],
})
export class LandingPageComponent {
  get year(): number {
    return new Date().getFullYear();
  }
}
