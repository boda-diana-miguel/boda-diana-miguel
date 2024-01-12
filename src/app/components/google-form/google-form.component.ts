import { Component, ViewChild } from '@angular/core';
import { iframeResizer } from "iframe-resizer"

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styleUrls: ['./google-form.component.css']
})
export class GoogleFormComponent {
  ngOnInit(){
    iframeResizer({ log: true }, '#iframe')
  }
}

