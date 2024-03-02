import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
];

@NgModule({
  exports: [...materialModules],
  providers: [MatIconRegistry],
})
export class MaterialModule {}
