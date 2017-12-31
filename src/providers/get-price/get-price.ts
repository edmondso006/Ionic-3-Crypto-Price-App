import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class GetPriceProvider {

  public data: any;

  constructor(public http: Http) {
    
  }

  getPrice(){
  return new Promise(resolve => {
      this.http.get('https://api.coinmarketcap.com/v1/ticker/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  

}
