import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetPriceProvider } from '../../providers/get-price/get-price';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;

  constructor(public navCtrl: NavController, private getPriceProvider: GetPriceProvider) {
    this.getPrice();
  }

  getPrice(){
    this.getPriceProvider.getPrice().
      then( data => {
        this.data = data;
        console.log(data);
      });
   }


   refresh(refresher){
      this.getPrice();
      setTimeout(() => {
        refresher.complete();
      }, 500);
   }

}
