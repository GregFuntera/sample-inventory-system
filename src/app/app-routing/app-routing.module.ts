import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from '../pages/movie/movie-page/movie-page.component';
import { MovieViewPageComponent } from '../pages/movie/movie-view-page/movie-view-page.component';
import { MovieAddPageComponent } from '../pages/movie/movie-add-page/movie-add-page.component';
import { PageNotFoundComponent } from './../pages/_includes/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviePageComponent, data: {title: 'Movies'} },
  { path: 'movies/:movieTitle', component: MovieViewPageComponent, data: {title: 'Movie Details'} },
  { path: 'add', component: MovieAddPageComponent, data: {title: 'Add Movie'} },
  { path: '**', component: PageNotFoundComponent, data: {title: 'Sorry'} }
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
