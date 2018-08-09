import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
//
import { MovieService } from './../../../services/movie/movie.service';

@Component({
  selector: 'app-movie-view-page',
  templateUrl: './movie-view-page.component.html',
  styleUrls: ['./movie-view-page.component.scss']
})
export class MovieViewPageComponent implements OnInit {

  createdAt: any;
  movie: any = {};
  movieForm: any;

  constructor(
    private route: ActivatedRoute,
    private movieSvc: MovieService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.createdAt = this.route.snapshot.queryParamMap.get('created_at');
  }

  ngOnInit() {
    this.loadMovie();
    this.setupValidators();
  }

  setupValidators() {
    if (this.movie) {
      this.movieForm = this.fb.group({
        featured_photo: [this.movie.featured_photo, Validators.required],
        title: [this.movie.title, Validators.required],
        synopsis: [this.movie.synopsis, Validators.compose(
          [
            Validators.required,
            Validators.minLength(5)
          ])
        ]
      });
    }
  }

  loadMovie() {
    this.movie = this.movieSvc.getMovie(this.createdAt);
  }

  updateMoviePoster(poster: string) {
    this.movieSvc.updateMoviePoster(this.createdAt, poster)
        .then((data) => {
            this.openSnackBar(data.message, 'OK');
        });
  }

  updateMovie(value) {
    if (this.movieForm.valid) {
      this.movieSvc.updateMovie(this.createdAt, value)
        .then((data) => {
          this.openSnackBar(data.message, 'OK');
      });
    }
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
