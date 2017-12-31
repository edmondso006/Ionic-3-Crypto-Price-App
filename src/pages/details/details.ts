import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  currency: any;

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  week: any;
  day: any;
  hour: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillLoad() {
    this.currency = this.navParams.get('coin');
    console.log(this.currency);

    this.getWeek();
    this.getDay();
    this.getHour();

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
      type: 'line',
      data: {
          labels: ["7 Days", "24 Hours", "1 Hour"],
          datasets: [
              {
                  label: this.currency.name + " Price",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [this.week, this.day, this.hour],
                  spanGaps: false,
              }
          ]
      }

    });

  }

  getWeek(){
    let neg;
    if(this.currency.percent_change_7d > 0){
       neg = false;
    }else{
       neg = true;
    }
    let decimal = this.currency.percent_change_7d / 100;
    console.log("Decimal: " + decimal );
    let absDecimal = Math.abs(decimal);
    console.log("ABS Decimal " + absDecimal);
    

    let change = absDecimal * this.currency.price_usd;
    console.log("Change: " + change);
    
    if(neg == true){
      this.week = this.currency.price_usd - change;
    }else{
      this.week = this.currency.price_usd + change;
    }
    console.log(this.week);
  }

  getDay(){
    let neg;
    if(this.currency.percent_change_24h > 0){
       neg = false;
    }else{
       neg = true;
    }
    let decimal = this.currency.percent_change_24h / 100;
    console.log("Decimal: " + decimal );

    let change = decimal * this.currency.price_usd;
    console.log("Change: " + change);
    
    if(neg == true){
      this.day = this.currency.price_usd - change;
    }else{
      this.day = this.currency.price_usd + change;
    }
    console.log(this.day);

  }

  getHour(){
    let neg;
    if(this.currency.percent_change_1h > 0){
       neg = false;
    }else{
       neg = true;
    }
    let decimal = this.currency.percent_change_1h / 100;
    console.log("Decimal: " + decimal );

    let change = decimal * this.currency.price_usd;
    console.log("Change: " + change);
    
    if(neg == true){
      this.hour = this.currency.price_usd - change;
    }else{
      this.hour = this.currency.price_usd + change;
    }
    console.log(this.hour);
  }


}
