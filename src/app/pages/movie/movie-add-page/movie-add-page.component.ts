import { Component, OnInit } from '@angular/core';
import { Movies } from './../../../models/movies.model';
import { MovieService } from './../../../services/movie/movie.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-add-page',
  templateUrl: './movie-add-page.component.html',
  styleUrls: ['./movie-add-page.component.scss']
})
export class MovieAddPageComponent implements OnInit {

  movie: any;

  constructor(
    private movieSvc: MovieService,
    private snackBar: MatSnackBar,
    private router: Router) {
    // Nothing here...
  }

  ngOnInit() {
    let title = '';
    let featured_photo = '';
    let synopsis = '';
    this.movie = new Movies(title, featured_photo, synopsis);
  }

  updateMoviePoster(moviePoster: string) {
    this.movie.featured_photo = moviePoster;
  }

  addMovie() {
    this.movieSvc.addMovie(this.movie)
        .then((data) => {
          this.navigateTo('movies')
            .then(() => {
              this.openSnackBar(data.message, 'OK');
          });
        });
  }

  navigateTo(page: string): Promise<any> {
    return this.router.navigate([`/${page}`]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
