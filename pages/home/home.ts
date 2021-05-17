import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 end     : string;
 numeros : string;
 texto   : string;

  constructor(public navCtrl: NavController) {

    this.end     = "301 João da Silva";
    this.numeros = this.end.replace(/\D+/g, "");
    this.texto   = this.end.replace(/[^A-Za-zá-üÁ-Ü]/g,' ');
  
  }
}
