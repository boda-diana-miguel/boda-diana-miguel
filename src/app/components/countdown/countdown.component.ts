import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;

  constructor(){}

  ngOnInit(){
      this.clock = this.source.subscribe(t => {
      this.now = new Date().getTime();
      this.end = new Date(2024,3,27,12,0).getTime();
      this.showDate();
    });
    
  }
  showDate(){
    let miliseconds = this.end - this.now;
    this.day = Math.floor(miliseconds / this._day);
    this.hours = Math.floor((miliseconds % this._day) / this._hour);
    this.minutes = Math.floor((miliseconds % this._hour) / this._minute);
    this.seconds = Math.floor((miliseconds % this._minute) / this._second);
  }
}
