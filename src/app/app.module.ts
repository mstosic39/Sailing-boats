import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from 'angular-io-overlay';
import { DatePickerModule} from 'angular-io-datepicker';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CollapseDirective } from './shared/collapse.directive';
import { LocationsComponent } from './locations/locations.component';
import { BoatsComponent } from './boats/boats.component';
import { HomeComponent } from './home/home.component';
import { BoatService} from './boat.service';
import { SelectedComponent } from './boats/selected/selected.component';

import { AgmCoreModule } from '@agm/core';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'locations', component: LocationsComponent},
  { path: 'boats', component: BoatsComponent, children : [
      {path: ':selected', component: SelectedComponent}
    ] 
  }  
]  

@NgModule({
  declarations: [
    AppComponent,
    CollapseDirective,
    LocationsComponent,
    BoatsComponent,
    HomeComponent,
    SelectedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    OverlayModule,
    DatePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_L4Wc-gDc73esns10znMrmcqulTEoUk0'
    })
  ],

  providers: [BoatService],
  bootstrap: [AppComponent]
})


export class AppModule { }
