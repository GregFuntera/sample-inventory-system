import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../../services/movie/movie.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  totalMovies: number;
  totalLikedMovies: number;

  constructor(private movieSvc: MovieService) {
    this.totalMovies = movieSvc.getTotalMovieCount();
    this.totalLikedMovies = movieSvc.getTotalLikedMovies();
    console.log(this.totalLikedMovies + '/' + this.totalMovies);
  }

  ngOnInit() {
  }



}
