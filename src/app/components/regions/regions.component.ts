import { Component, OnInit } from '@angular/core';
import { RestcoutriesService, RegionsCountries } from '../../restcoutries.service'

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})

export class RegionsComponent implements OnInit {
  constructor(private _restdata: RestcoutriesService, private rdata: RegionsCountries) { }
  
  //all vars are using to get data from rest and set values in html
  _region: any = [];
  _allcountries: any = [];
  _pageTitle: string = "World's Region"
  _regionCount: number;
  _filtered:any = [];
  
  ngOnInit() {
    //using service RestcoutriesService to get all the data on first load to filter regions only
    this._restdata.getCountryData('').subscribe(
      data => {
        this._allcountries = data;
        this._region = this._restdata.getUniqeValues(this._allcountries, 'region');
        //remving empty object from array
        this._filtered = this._region.filter(function (el) {
          return el != '';
        });
        this._regionCount = this._filtered.length;
      }
    );
   }

  //getting and sending region to service
   getRC(reg) {
      this.rdata.serviceRC(reg)
    }
  }
