import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrylistComponent } from './components/countrylist/countrylist.component';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';
import { RegionsComponent } from "./components/regions/regions.component"
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { CountrydetailComponent } from "./components/countrydetail/countrydetail.component";
import { DashboardComponent } from './components/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: '/userlogin', pathMatch: 'full' },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'allcountries', component: AllcountriesComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'countries', component: CountrylistComponent },
  { path: 'countrydetail', component: CountrydetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
