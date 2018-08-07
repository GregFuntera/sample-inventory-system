import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from '../pages/movie/movie-page/movie-page.component';
import { MovieViewPageComponent } from '../pages/movie/movie-view-page/movie-view-page.component';
import { MovieAddPageComponent } from '../pages/movie/movie-add-page/movie-add-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviePageComponent, data: {title: 'Movies'} },
  { path: 'movies/:movieTitle', component: MovieViewPageComponent, data: {title: 'Movie Details'} },
  { path: 'add', component: MovieAddPageComponent, data: {title: 'Add Movie'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
