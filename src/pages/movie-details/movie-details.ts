import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Movie} from '../../models/Movie';
import {Character} from '../../models/Character';
import {SwapiCharacters} from '../../providers/swapi-characters';
import {CharacterDetailsPage} from '../character-details/character-details';

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html'
})
export class MovieDetailsPage {
  private movie: Movie;
  private appearingCharacters: Character[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiCharacters: SwapiCharacters) {
    this.movie = this.navParams.get('movie');
    this.movie.characters.map(charLink =>  {
      this.swapiCharacters.loadCharacterByUrl(charLink).subscribe(character => {
        this.appearingCharacters.push(character)
      });
    });
  }

  characterSelected(character: Character) {
    this.navCtrl.push(CharacterDetailsPage, {character});
  }

}
