import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/home/home.component';
import { CountrylistComponent } from './components/countrylist/countrylist.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { RegionsComponent } from "./components/regions/regions.component"

import { RestcoutriesService, RegionsCountries, CountryDetail } from './restcoutries.service';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountrydetailComponent } from "./components/countrydetail/countrydetail.component";

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent,
    UserloginComponent,
    HeaderComponent,
    NavigationComponent,
    RegionsComponent,
    AllcountriesComponent,
    DashboardComponent,
    CountrydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestcoutriesService, RegionsCountries, CountryDetail ],
  bootstrap: [AppComponent]
})
export class AppModule { }
