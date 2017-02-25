import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../models/Movie";
import {SwapiMovies} from "../../providers/swapi-movies";
import {MovieDetailsPage} from "../movie-details/movie-details";

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html'
})
export class MoviesPage {
  private movies: Movie[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiMovies: SwapiMovies) {
    swapiMovies.loadMovies().subscribe(movies => {
      this.movies = movies;
      this.movies.sort((a,b) => b.episode - a.episode);
    })
  }

  romanizeEpisode(episode: number): string {
    if(episode < 1){ return "";}
    if(episode >= 40){ return "XL" + this.romanizeEpisode(episode - 40);}
    if(episode >= 10){ return "X" + this.romanizeEpisode(episode - 10);}
    if(episode >= 9){ return "IX" + this.romanizeEpisode(episode - 9);}
    if(episode >= 5){ return "V" + this.romanizeEpisode(episode - 5);}
    if(episode >= 4){ return "IV" + this.romanizeEpisode(episode - 4);}
    if(episode >= 1){ return "I" + this.romanizeEpisode(episode - 1);}
  }

  movieSelected(movie: Movie) {
    this.navCtrl.push(MovieDetailsPage, {movie});
  }

}
