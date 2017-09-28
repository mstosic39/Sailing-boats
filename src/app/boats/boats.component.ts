import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoatService } from '../boat.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  


  constructor(
  			  private boatService: BoatService,
  			  private route: ActivatedRoute
  			  ) { }

  ngOnInit() {
    console.log("boats component inited");
  }

}
