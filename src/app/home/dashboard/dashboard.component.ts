import {Component} from '@angular/core';
import {SidenavComponent} from '../../shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [SidenavComponent],
})
export class DashboardComponent {}
