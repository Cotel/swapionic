import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Character} from "../../models/Character";
import {Planet} from "../../models/Planet";
import {SwapiPlanets} from "../../providers/swapi-planets";
import {PlanetDetailsPage} from "../planet-details/planet-details";

@Component({
  selector: 'page-character-details',
  templateUrl: 'character-details.html'
})
export class CharacterDetailsPage {
  private character: Character;
  private characterHomeworld: Planet = <Planet>({id: 0, population: "0", name: ""});

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiPlanets: SwapiPlanets) {
    this.character = navParams.get('character');
    swapiPlanets.getPlanetById(this.character.homeworld)
      .subscribe(planet => this.characterHomeworld = planet);
  }

  getCharacterSexIcon() {
    return (this.character.gender === 'n/a') ? 'ionitron' : this.character.gender;
  }

  planetSelected(planet: Planet) {
    this.navCtrl.push(PlanetDetailsPage, {planet});
  }

}
