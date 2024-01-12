import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigatorComponent {
  openForm(){
    window.open("https://forms.gle/naYQd4u2dyoMxo546", "_blank");
  }
}
