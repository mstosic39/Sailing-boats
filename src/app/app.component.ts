import { Component, OnInit, HostBinding } from '@angular/core';
import { BoatService } from'./boat.service';
import { Http } from '@angular/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
  			      private boatService: BoatService,
  			      private http: Http              
  			  ){}

  isCollapsed: boolean = true;

  onClick(){
    this.isCollapsed = !this.isCollapsed;
  };

  ngOnInit(){
  }

}
