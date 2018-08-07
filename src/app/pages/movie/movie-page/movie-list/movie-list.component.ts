import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../../../services/movie/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor(private movieSvc: MovieService) {
    // Nothing here...
  }

  ngOnInit() {
    this.movies = this.movieSvc.getMovies();
    // console.log('movies: ', this.movies);
  }

  deleteMovie(createdAt) {
    this.movieSvc.deleteMovie(createdAt)
        .then((message) => {
          // console.log(message);
        });
  }

}
