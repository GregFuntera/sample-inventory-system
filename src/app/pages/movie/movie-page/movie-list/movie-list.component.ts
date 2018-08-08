import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovieService } from './../../../../services/movie/movie.service';
// Dialog
import { RemovieMovieDialogComponent } from './../../../_includes/dialogs/removie-movie-dialog/removie-movie-dialog.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor(
    private movieSvc: MovieService,
    private matDialog: MatDialog) {
    // Nothing here...

  }

  ngOnInit() {
    this.movies = this.movieSvc.getMovies();
    // console.log('movies: ', this.movies);
  }

  deleteMovie(createdAt) {
    const message = `Are you sure you want to remove this movie?`;
    this.openDialog(RemovieMovieDialogComponent, createdAt, message);
  }

  openDialog(component, createdAt, message) {
    const dialogRef = this.matDialog.open(component, {
        width: '300px',
        data: {createdAt: createdAt, message: message}
    });
  }

}
