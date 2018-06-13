import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  public movies;

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.movies = this.http.get('https://api.myjson.com/bins/x5g4x');
  }
}
