import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SwapiPlanets} from "../../providers/swapi-planets";
import {Planet} from "../../models/Planet";
import {PlanetDetailsPage} from "../planet-details/planet-details";

@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html'
})
export class PlanetsPage {
  private planets: Planet[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiPlanets: SwapiPlanets) {
    this.swapiPlanets.loadPlanets()
      .subscribe(planets => this.planets = planets);
  }

  planetSelected(planet: Planet) {
    this.navCtrl.push(PlanetDetailsPage, {planet});
  }

}
