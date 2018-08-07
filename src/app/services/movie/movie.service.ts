import { Injectable } from '@angular/core';
import { Movies } from './../../models/movies.model';
import { Mock } from './../../mocks/movies.mock';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    public moviesMock: Mock
  ) { }

  getMovies(): Movies[] {
    return this.moviesMock.mockData;
  }

  getMovie(createdAt): any {
    return this.moviesMock.mockData
               .find(movie => movie.created_at == createdAt);
  }

  addMovie(movie): Promise<any> {
    return new Promise((resolve, reject) => {
      this.moviesMock.mockData.push(movie);
      resolve({message: 'Added new movie.'});
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
}
