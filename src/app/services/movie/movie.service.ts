import { Injectable } from '@angular/core';
import { Movies } from './../../models/movies.model';
import { Mock } from './../../mocks/movies.mock';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    public moviesMock: Mock,
    private router: Router) {
    // Nothing here..
  }

  getMovies(): Movies[] {
    return this.moviesMock.mockData;
  }

  getMovie(createdAt): Promise<any> {
    return new Promise((resolve, reject) => {
        let tempMovie = this.moviesMock.mockData
          .find(movie => movie.created_at == createdAt);
        if (tempMovie) {
          resolve(tempMovie);
        } else {
          this.router.navigate(['**']);
        }
    });
  }

  addMovie(movie): Promise<any> {
    return new Promise((resolve, reject) => {
      this.moviesMock.mockData.push(movie);
      resolve({message: 'Added new movie.'});
    });
  }

  updateMovieLike(createdAt, like): Promise<any> {
    let index = this.getArrayIndex(createdAt);
    return new Promise((resolve, reject) => {
        this.moviesMock.mockData[index].like = like;
        resolve({message: 'Like process success.'});
    });
  }

  updateMoviePoster(createdAt, poster): Promise<any> {
    let index = this.getArrayIndex(createdAt);
    return new Promise((resolve, reject) => {
      this.moviesMock.mockData[index].featured_photo = poster;
      resolve({message: 'Updated movie poster.'});
    });
  }

  updateMovie(createdAt, movie): Promise<any> {
    let index = this.getArrayIndex(createdAt);
    return new Promise((resolve, reject) => {
      this.moviesMock.mockData[index] = movie;
      resolve({message: 'Updated movie.'});
    });
  }

  deleteMovie(createdAt): Promise<any> {
    let index = this.getArrayIndex(createdAt);
    return new Promise((resolve, reject) => {
      this.moviesMock.mockData.splice(index, 1);
      resolve({message: 'Deleted a movie.'});
    });
  }

  getArrayIndex(createdAt): number {
    return this.moviesMock.mockData
               .findIndex(movie => movie.created_at == createdAt);
  }

  // INFORMATION SECTION
  getTotalMovieCount(): number {
    return this.moviesMock.mockData.length;
  }

  getTotalLikedMovies(): number {
    let numLikes = 0;
    this.moviesMock.mockData.forEach(
      movie => {
        if (movie.like) {
          numLikes++;
        }
    });
    return numLikes;
  }
}
