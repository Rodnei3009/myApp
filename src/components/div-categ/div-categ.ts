import { Component } from '@angular/core';

/**
 * Generated class for the DivCategComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'div-categ',
  templateUrl: 'div-categ.html'
})
export class DivCategComponent {

  text: string;
  className: string = 'dir';
  className_esq: string = 'esq';

  constructor() {
    console.log('Hello DivCategComponent Component');
    this.text = 'Hello World';
  }

  changeClass () {

    if (this.className === 'dir'){
      this.className = 'reduce';
      this.className_esq = 'delete';  
    } else {
      this.className = 'dir';
      this.className_esq = 'esq';
    }
    
  }


}