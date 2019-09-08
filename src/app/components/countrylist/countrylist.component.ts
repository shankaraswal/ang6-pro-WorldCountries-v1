import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegionsCountries, CountryDetail } from '../../restcoutries.service'

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})

export class CountrylistComponent implements OnInit  {
  _pageTitle : string;
  _countries: any = [];
  _countriesCount: number=0;
  _rcode:any;

  constructor(private http : HttpClient, private rdata: RegionsCountries, private cdata: CountryDetail) {}
  getCountryList(){
    return this.http.get('https://restcountries.eu/rest/v2/region/' + this._rcode);
    }

  ngOnInit() {
    //getting region code
    this.rdata._gotrc.subscribe(res => {
      this._rcode = res;
    });

     //set region name  
    this._pageTitle = this._rcode + ' ' + 'Region Countries';

    //
    this.getCountryList().subscribe(rc => {
      this._countries =rc;
      this._countriesCount=this._countries.length;
      })
    
    }

  //getting and sending region to service
  getCountryCode(country) {
     this.cdata.serviceCC(country)
   }

  }