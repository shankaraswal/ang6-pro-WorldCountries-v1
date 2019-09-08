import { Component, OnInit } from '@angular/core';
import { CountryDetail } from '../../restcoutries.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {

constructor(private http : HttpClient, private cdata: CountryDetail) { }
//all vars are using to get data from rest and set values in html
_countryDetail: any = [];
_pageTitle: string;
_countryAlphaCode:string;

getCountryDetail(){
  return this.http.get('https://restcountries.eu/rest/v2/alpha/' + this._countryAlphaCode);
  }

ngOnInit() {
  //getting country code
  this.cdata._gotCountryCode.subscribe(res => {
    this._countryDetail = res;
  });

  this._countryAlphaCode = this._countryDetail.alpha2Code.toLowerCase();

  console.log( this._countryAlphaCode);

  //
  this.getCountryDetail().subscribe(cc => {
    this._countryDetail =cc;
    })

  }

  trackByFn(index, item){
    return item.name;
  }

}
