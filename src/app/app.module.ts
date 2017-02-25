import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { MoviesPage } from '../pages/movies/movies';
import { PlanetsPage } from "../pages/planets/planets";
import { CharactersPage } from "../pages/characters/characters";
import {SwapiMovies} from "../providers/swapi-movies";
import {SwapiCharacters} from "../providers/swapi-characters";
import {SwapiPlanets} from "../providers/swapi-planets";
import {CharacterDetailsPage} from "../pages/character-details/character-details";
import {PlanetDetailsPage} from "../pages/planet-details/planet-details";
import {MovieDetailsPage} from "../pages/movie-details/movie-details";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MoviesPage,
    MovieDetailsPage,
    CharactersPage,
    CharacterDetailsPage,
    PlanetsPage,
    PlanetDetailsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MoviesPage,
    MovieDetailsPage,
    CharactersPage,
    CharacterDetailsPage,
    PlanetsPage,
    PlanetDetailsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwapiMovies,
    SwapiCharacters,
    SwapiPlanets
  ]
})
export class AppModule {}
