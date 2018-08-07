import { Component, OnInit } from '@angular/core';
import { Movies } from './../../../models/movies.model';
import { MovieService } from './../../../services/movie/movie.service';

@Component({
  selector: 'app-movie-add-page',
  templateUrl: './movie-add-page.component.html',
  styleUrls: ['./movie-add-page.component.scss']
})
export class MovieAddPageComponent implements OnInit {

  movie: any;

  constructor(private movieSvc: MovieService) {
    // Nothing here...
  }

  ngOnInit() {
    let title = '';
    let featured_photo = '';
    let synopsis = '';
    this.movie = new Movies(title, featured_photo, synopsis);
  }

  addMovie() {
    this.movieSvc.addMovie(this.movie)
        .then((message) => {
            console.log(message);
        });
  }

}
