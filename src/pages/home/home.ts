import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page3Page } from './../page3/page3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  page3(): void {
    this.navCtrl.setRoot(Page3Page);
  }

}
