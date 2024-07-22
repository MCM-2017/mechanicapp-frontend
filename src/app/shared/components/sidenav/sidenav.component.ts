import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ProjectProperties} from '../../../../properities';
import {selectIsDarkMode} from '../../../store/global.selector';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.reducer';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  isDarkMode = false;
  destroyRef = inject(DestroyRef);

  get logoName(): string {
    return this.isDarkMode
      ? ProjectProperties.LightLogoName
      : ProjectProperties.DarkLogoName;
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(selectIsDarkMode)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (isDarkMode) => {
          console.log('is dark mode??', isDarkMode);
          this.isDarkMode = isDarkMode;
        },
      });
  }
}
