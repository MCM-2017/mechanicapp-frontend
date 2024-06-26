import {Component, OnInit, Renderer2} from '@angular/core';
import {AppState} from '../../../store/app.reducer';
import {Store} from '@ngrx/store';
import * as GlobalActions from 'src/app/store/global.action';
import {ThemeToggleIconName} from '../../enums/theme-toggle-icon-name';
import {selectIsDarkMode} from '../../../store/global.selector';
import {Subject, takeUntil} from 'rxjs';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-change-theme-toggle',
  templateUrl: './change-theme-toggle.component.html',
  styleUrls: ['./change-theme-toggle.component.scss'],
  standalone: true,
  imports: [MatIconButton],
})
export class ChangeThemeToggleComponent implements OnInit {
  iconName = ThemeToggleIconName.DarkToggle;
  isDarkMode = false;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.store
      .select(selectIsDarkMode)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (isDarkMode) => {
          this.isDarkMode = isDarkMode;
          this.iconName = isDarkMode
            ? ThemeToggleIconName.LightToggle
            : ThemeToggleIconName.DarkToggle;
        },
      });
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.store.dispatch(GlobalActions.turnOnDarkMode({ isDarkMode: true }));
      this.renderer.addClass(document.body, 'dark-theme');
      this.iconName = ThemeToggleIconName.LightToggle;
    } else {
      this.store.dispatch(GlobalActions.turnOffDarkMode({ isDarkMode: false }));
      this.renderer.removeClass(document.body, 'dark-theme');
      this.iconName = ThemeToggleIconName.DarkToggle;
    }
  }
}
