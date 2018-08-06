import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './../pages/movie/movie-page/movie-page.component';
import { MovieViewPageComponent } from './../pages/movie/movie-view-page/movie-view-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviePageComponent },
  { path: 'movie/:movieID', component: MovieViewPageComponent}
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
