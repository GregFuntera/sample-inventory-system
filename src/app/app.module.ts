import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Material Module
import { AppMaterialModule } from './app-material/app-material.module';
import { MoviePageComponent } from './pages/movie/movie-page/movie-page.component';
// Routing Module
import { AppRoutingModule } from './app-routing/app-routing.module';
// Pages
import { MovieViewPageComponent } from './pages/movie/movie-view-page/movie-view-page.component';
import { MovieListComponent } from './pages/movie/movie-page/movie-list/movie-list.component';
import { MovieAddPageComponent } from './pages/movie/movie-add-page/movie-add-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePageComponent,
    MovieViewPageComponent,
    MovieListComponent,
    MovieAddPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
