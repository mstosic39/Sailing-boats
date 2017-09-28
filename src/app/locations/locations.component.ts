import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private router: Router) { }

  locations = [
  		{
  			name: "Corfu",
  			imageUrl:"../assets/images/Locations/corfu.jpg",
        lat: 39.627453,
        lng: 19.916497	
  		},
   		{
  			name: "Crete",
  			imageUrl:"../assets/images/Locations/crete.jpg",
        lat: 35.343320,
        lng: 25.135910  
  		},  		{
  			name: "Cyprus",
  			imageUrl:"../assets/images/Locations/cyprus.jpg",
        lat: 34.669461,
        lng: 33.039246          	
  		} 		

  ];

  goToLocation(loc, lat, lng){
  		console.log(loc);
  		this.router.navigate(['/boats/' + loc], {queryParams:{lat: lat, lng: lng}});
  }

  ngOnInit() {
  }


}
