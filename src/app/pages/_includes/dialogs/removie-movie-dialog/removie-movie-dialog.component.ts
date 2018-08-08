import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MovieService } from './../../../../services/movie/movie.service';

@Component({
  selector: 'app-removie-movie-dialog',
  templateUrl: './removie-movie-dialog.component.html',
  styleUrls: ['./removie-movie-dialog.component.scss']
})
export class RemovieMovieDialogComponent implements OnInit {

  message: string;
  createdAt: number;

  constructor(
    public dialogRef: MatDialogRef<RemovieMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private movieSvc: MovieService,
    private snackBar: MatSnackBar) {
      this.message = data.message;
      this.createdAt = data.createdAt;
  }

  ngOnInit() {
    //
  }

  removeMovie() {
    this.movieSvc.deleteMovie(this.createdAt)
        .then((data) => {
            this.dialogRef.close();
            this.openSnackBar(data.message, 'OK');
        });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
