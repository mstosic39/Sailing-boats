import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BoatService } from '../boat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') myForm: NgForm;

  location: string;
  startDate: any;
  finishDate: any;

  sDate: Date;
  fDate: Date;

  constructor(private boatService: BoatService,
              private router: Router) { 
  }

  ngOnInit() {}

  onSubmit(){

    this.boatService.availableBoats = [];

    this.location = this.myForm.value.selectLocation;
    this.startDate = this.myForm.value.inputStartDate;
    this.finishDate = this.myForm.value.inputFinishDate;
    this.sDate = new Date(this.startDate);
    this.fDate = new Date(this.finishDate); 
    this.router.navigate(['/boats/available'],  {queryParams:{location: this.location, start: this.sDate, finish:this.fDate}});  
  }



}
