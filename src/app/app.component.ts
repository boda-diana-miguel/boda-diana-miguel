import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boda-diana-miguel';
  loaded = false;

  ngAfterViewInit(){
    this.loaded =  true
  }
  isLoaded(){
    if(this.loaded){
      return "block"
    } else {
      return "none"
    }
  }
  isNotLoaded(){
    if(this.loaded){
      return "none"
    } else {
      return "block"
    }
  }
}
