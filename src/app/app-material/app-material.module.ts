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
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCardModule
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
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule
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
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
