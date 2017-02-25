import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Planet} from "../../models/Planet";
@Component({
  selector: 'page-planet-details',
  templateUrl: 'planet-details.html'
})
export class PlanetDetailsPage {
  private planet: Planet;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.planet = this.navParams.get('planet');
  }

}
