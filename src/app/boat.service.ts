import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()

export class BoatService {
  constructor(private http: Http){}

  boatsData = [];
  availableBoats = [];
  startDate: Date;
  finishDate: Date;
  location: string;
  notAvailable: boolean;

  getBoatsData(){
  		return this.http.get('https://post-and-get-6f1cc.firebaseio.com/data.json');
  }

  checkReservations(location, start, finish){
    for(let i = 0; i <= this.boatsData.length - 1; i++ ){
      if(this.boatsData[i].location == location){
        let counter = 0;
        for(let j = 0; j <= this.boatsData[i].reservations.length - 1; j++ ){ 
          if(
                start < new Date(this.boatsData[i].reservations[j].startDay) && 
                finish < new Date(this.boatsData[i].reservations[j].startDay) ||
                start > new Date(this.boatsData[i].reservations[j].finishDay) && 
                finish > new Date(this.boatsData[i].reservations[j].finishDay)         
                
           ){
              counter += 1;

          }else{
              counter = 0;
              break;               
          }

        } 
        if(counter > 0){
          this.availableBoats.push(this.boatsData[i]);
          this.notAvailable = false;
        }else{}
      }else{}
    }
    this.startDate = start;
    this.finishDate = finish;
    this.location = location;
  }
}