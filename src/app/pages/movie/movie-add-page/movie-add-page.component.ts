import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
//
import { Movies } from './../../../models/movies.model';
import { MovieService } from './../../../services/movie/movie.service';

@Component({
  selector: 'app-movie-add-page',
  templateUrl: './movie-add-page.component.html',
  styleUrls: ['./movie-add-page.component.scss']
})
export class MovieAddPageComponent implements OnInit {
  movie: any;
  movieForm: any;

  constructor(
    private movieSvc: MovieService,
    private snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder) {
    // Validators
    this.setupValidators();
  }

  setupValidators() {
    this.movieForm = this.fb.group({
      featured_photo: ['', Validators.required],
      title: ['', Validators.required],
      synopsis: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5)
        ])
      ]
    });
  }

  ngOnInit() {
    let title = '',
        featured_photo = '',
        synopsis = '';
    this.movie = this.transformMovie(title, featured_photo, synopsis);
  }

  updateMoviePoster(moviePoster: string) {
    this.movie.featured_photo = moviePoster;
  }

  addMovie(value) {
    if (this.movieForm.valid) {
      this.movie = this.transformMovie(value.title, value.featured_photo, value.synopsis);
      // Adding new Value
      this.movieSvc.addMovie(this.movie)
          .then((data) => {
            this.navigateTo('movies')
              .then(() => {
                this.openSnackBar(data.message, 'OK');
          });
      });
    }
  }

  transformMovie(title, featured_photo, synopsis): Movies {
    let movie = new Movies(title, featured_photo, synopsis);
    return movie;
  }

  navigateTo(page: string): Promise<any> {
    return this.router.navigate([`/${page}`]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  getErrorMessage(formName) {
    return this.movieForm.get(formName).hasError('required') ? 'You must enter a value' :
      this.movieForm.get(formName).hasError('minlength') ? 'Minimum characters must be at least 5' : '';
  }
}
