import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SwapiCharacters} from "../../providers/swapi-characters";
import {Character} from "../../models/Character";
import {CharacterDetailsPage} from "../character-details/character-details";

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})
export class CharactersPage {
  private characters: Character[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiChars: SwapiCharacters) {
    this.swapiChars.loadCharacters().subscribe(data => this.characters = data);
  }

  characterSelected(character: Character) {
    this.navCtrl.push(CharacterDetailsPage, {character});
  }

}
