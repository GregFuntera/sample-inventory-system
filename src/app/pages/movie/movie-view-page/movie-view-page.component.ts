import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../../services/movie/movie.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-movie-view-page',
  templateUrl: './movie-view-page.component.html',
  styleUrls: ['./movie-view-page.component.scss']
})
export class MovieViewPageComponent implements OnInit {

  createdAt: any;
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private movieSvc: MovieService,
    private snackBar: MatSnackBar
  ) {
    this.createdAt = this.route.snapshot.queryParamMap.get('created_at');
  }

  ngOnInit() {
    console.log('created at: ', this.createdAt);
    this.loadMovie();
  }

  loadMovie() {
    this.movie = this.movieSvc.getMovie(this.createdAt);
    // console.log(this.movie);
  }

  updateMoviePoster(poster: string) {
    this.movieSvc.updateMoviePoster(this.createdAt, poster)
        .then((data) => {
            this.openSnackBar(data.message, 'OK');
        });
  }

  updateMovie() {
    this.movieSvc.updateMovie(this.createdAt, this.movie)
        .then((data) => {
          this.openSnackBar(data.message, 'OK');
        });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
