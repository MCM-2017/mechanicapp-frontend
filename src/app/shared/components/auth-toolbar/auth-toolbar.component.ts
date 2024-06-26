import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {selectIsDarkMode} from '../../../store/global.selector';
import {noop, Subject, takeUntil} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.reducer';
import {ProjectProperties} from '../../../../properities';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {ChangeThemeToggleComponent} from '../change-theme-toggle/change-theme-toggle.component';

@Component({
  selector: 'app-auth-toolbar',
  templateUrl: './auth-toolbar.component.html',
  styleUrls: ['./auth-toolbar.component.scss'],
  standalone: true,
  imports: [ChangeThemeToggleComponent, MatToolbar, MatIconButton, MatIcon],
})
export class AuthToolbarComponent implements OnInit {
  isDarkMode = false;

  private _destroy$: Subject<void> = new Subject<void>();

  get logoName(): string {
    return this.isDarkMode
      ? ProjectProperties.LightLogoName
      : ProjectProperties.DarkLogoName;
  }

  constructor(
    private store: Store<AppState>,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.store
      .select(selectIsDarkMode)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (isDarkMode) => {
          this.isDarkMode = isDarkMode;
        },
      });
  }

  navigateBack(): void {
    this._router.navigate(['/']).then(noop);
  }
}
