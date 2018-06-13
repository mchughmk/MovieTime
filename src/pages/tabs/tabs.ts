import { Component } from '@angular/core';

import { CountriesPage } from '../countries/countries';
import { HomePage } from '../home/home';
import { MoviesPage } from '../movies/movies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MoviesPage;
  tab3Root = CountriesPage;

  constructor() {

  }
}
