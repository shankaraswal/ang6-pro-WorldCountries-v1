import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
//this service usring for dashboard component
export class RestcoutriesService {
  constructor(private http:HttpClient) { }

  
  getCountryData(rc) {
    if (rc && rc.length > 0) {
      return this.http.get('https://restcountries.eu/rest/v2/region/' + rc);
    }
    else {
      return this.http.get('https://restcountries.eu/rest/v2/all');
    }
   }

    getUniqeValues(arr, prop) {
      return arr.map(function (e) { return e[prop]; }).filter(function (e, i, a) {
        return i === a.indexOf(e);
      });
    }
  }







@Injectable()
//this service usring for region component
export class RegionsCountries {
  private subject = new BehaviorSubject('');
  _gotrc = this.subject.asObservable();
  constructor() { }
    serviceRC(rc) {
      this.subject.next(rc)
    }
  }
  





@Injectable()
//this service using for country deatil compoenent
export class CountryDetail {
  private subject = new BehaviorSubject('');
  _gotCountryCode = this.subject.asObservable();
  constructor() { }
    serviceCC(cc) {
        this.subject.next(cc)
      }
    }

  