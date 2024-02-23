import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [MatButtonModule, MatIconModule, MatToolbarModule];

@NgModule({
  exports: [...materialModules],
})
export class MaterialModule {}
