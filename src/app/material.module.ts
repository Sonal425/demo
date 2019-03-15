import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
