import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTooltipModule
  ]
})
export class AppMaterialModule { }
