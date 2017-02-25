import { Component } from '@angular/core';

import { MoviesPage } from '../movies/movies';
import {CharactersPage} from "../characters/characters";
import {PlanetsPage} from "../planets/planets";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MoviesPage;
  tab2Root: any = CharactersPage;
  tab3Root: any = PlanetsPage;

  constructor() {

  }
}
