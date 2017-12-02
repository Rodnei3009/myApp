import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriaPage } from './../categoria/categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  categoria(): void {
    this.navCtrl.setRoot(CategoriaPage);
  }

}
