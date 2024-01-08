import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styleUrls: ['./google-form.component.css']
})
export class GoogleFormComponent {
  alto : string | undefined
  
  ngOnInit(){
    this.alto = "600 px"
  };
  

  resizeIframe(obj:any) {
    console.log(obj)
    this.alto = document.getElementById('iframe')?.scrollHeight + 'px';
  }

}
