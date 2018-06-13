import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  textSize: number = 10;

  constructor(public navCtrl: NavController) {

  }

}
