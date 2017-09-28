import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BoatService } from '../../boat.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit, OnDestroy  {
  selected: string;
  boats = [];
  boatsToDisplay = [];
  message: string;
  paramsSubscription: Subscription; 
 
  lat: number;
  lng: number;

  constructor(
  			  private boatService: BoatService,
  			  private route: ActivatedRoute) { }

  start: any;
  finish: any;
  location: any;
  notAvailable: boolean;

  locationSelected: boolean = false;


  ngOnInit() {
      this.boatService.getBoatsData()
        .subscribe(
          (response: Response) => {
            this.boats = response.json();
            this.paramsFunction();
            
          },
          (error) => console.log(error)
        );
  }

  getYMD(t: Date){
    let y = t.getFullYear();
    let m = t.getMonth() + 1;
    let d = t.getDate();
    return d + "." + m + "." + y + "." ;
  }


  paramsFunction(){
     this.paramsSubscription = this.route.params
        .subscribe(
            (params: Params)=>{
                            this.selected = params['selected'];

                            if(this.selected =='all'){
                                this.locationSelected = false;
                                this.boatsToDisplay = this.boats;
                                this.message = 'All sailboats list';  
                            }else if( this.selected == 'available'){
                                this.start = new Date(this.route.snapshot.queryParams['start']);
                                this.finish = new Date(this.route.snapshot.queryParams['finish']);
                                this.location = this.route.snapshot.queryParams['location'];
                                this.boatService.boatsData = this.boats;
                                this.boatService.checkReservations(this.location, this.start, this.finish);
                                this.boatsToDisplay = this.boatService.availableBoats;
                                this.notAvailable = this.boatService.notAvailable;
                                this.message = 'Available sailboats on   ' + this.location + '  from   ' + this.getYMD(this.start) + '  to  ' + this.getYMD(this.finish); 
                            }else if( this.selected == 'Corfu' || this.selected =='Cyprus' || this.selected == 'Crete'){
                                this.boatsToDisplay = [];
                                this.locationSelected = true;
                                this.lat = + this.route.snapshot.queryParams['lat'];
                                this.lng = + this.route.snapshot.queryParams['lng'];
                                
                                for( let i = 0; i <= this.boats.length - 1; i++){
                                  if(this.boats[i].location == this.selected){
                                      this.boatsToDisplay.push(this.boats[i]);
                                  }else{}
                                }
                                this.message = 'Sailboats on ' + this.selected;  
                            }
                           },
            (error)=>{console.log(error)}
        );

  };
    
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
	}


}
