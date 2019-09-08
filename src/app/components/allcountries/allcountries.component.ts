import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { RegionsCountries, RestcoutriesService } from '../../restcoutries.service'


@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
@Pipe({name: 'country'})
export class AllcountriesComponent implements OnInit {
  constructor(private _restdata: RestcoutriesService, private rdata: RegionsCountries) { }
  //all vars are using to get data from rest and set values in html
  _region: any = [];
  _allcountries: any = [];
  _pageTitle: string = "All Countries"
  _allCount: number;

  ngOnInit() {
    console.log('initcalled');
    this.getCountries();
  }



    getCountries() {
    //using service RestcoutriesService to get all the data on first load to filter regions only

    this.rdata._gotrc.subscribe({
      next: (v) => this._regionCode = v
    });

    console.log('getCountries', this._regionCode);
    this._restdata.getCountryData(this._regionCode).subscribe(
      data => {
        this._allcountries = data;
        this._allCount = this._allcountries.length;
      }
    );
  }

  //getting and sending region to service
  _regionCode: any;
   getRC(reg) {
      this._regionCode = reg;
      this.rdata.serviceRC(this._regionCode)
    }

}
