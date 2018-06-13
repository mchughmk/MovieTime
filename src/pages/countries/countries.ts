import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-countries',
  templateUrl: 'countries.html',
})
export class CountriesPage {
  public countries;
  public states;

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.countries = this.http.get('https://xc-ajax-demo.herokuapp.com/api/countries/');
  }

  changeCountry(selectedCountry: string) {
    this.states = this.http.get('https://xc-ajax-demo.herokuapp.com/api/countries/' + selectedCountry + '/states/');
  }

}
