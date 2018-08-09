import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
// Services
import { MovieService } from './../../../services/movie/movie.service';
//
import { Movies } from './../../../models/movies.model';

@Component({
  selector: 'app-movie-view-page',
  templateUrl: './movie-view-page.component.html',
  styleUrls: ['./movie-view-page.component.scss']
})
export class MovieViewPageComponent implements OnInit {

  createdAt: any;
  movie: Movies;
  movieForm: any;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private movieSvc: MovieService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.createdAt = this.route.snapshot.queryParamMap.get('created_at');
  }

  ngOnInit() {
    this.movieSvc.getMovie(this.createdAt)
      .then((movie) => {
        this.movie = movie;
        this.setupValidators(movie);
    });
  }

  setupValidators(movie) {
    if (movie) {
      this.movieForm = this.fb.group({
        featured_photo: [movie.featured_photo, Validators.required],
        title: [movie.title, Validators.required],
        synopsis: [movie.synopsis, Validators.compose(
          [
            Validators.required,
            Validators.minLength(5)
          ])
        ]
      });
      // Finished validator setup...
      this.isLoading = false;
    }
  }

  updateMoviePoster(poster: string) {
    this.movieSvc.updateMoviePoster(this.createdAt, poster)
        .then((data) => {
            this.openSnackBar(data.message, 'OK');
        });
  }

  updateMovie(value) {
    if (this.movieForm.valid) {
      this.movie = this.transformMovie(value);
      this.movieSvc.updateMovie(this.createdAt, this.movie)
        .then((data) => {
          this.openSnackBar(data.message, 'OK');
      });
    }
  }

  transformMovie(value): Movies {
    let movie = new Movies(value.title, value.featured_photo, value.synopsis);
    movie.created_at = this.createdAt;
    return movie;
  }

  getErrorMessage(formName) {
    return this.movieForm.get(formName).hasError('required') ? 'You must enter a value' :
      this.movieForm.get(formName).hasError('minlength') ? 'Minimum characters must be at least 5' : '';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
