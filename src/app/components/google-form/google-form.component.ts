import { Component } from '@angular/core';

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styleUrls: ['./google-form.component.css']
})
export class GoogleFormComponent {

  constructor(){
    window.onerror = function(errmessage)
    {
        console.log(errmessage);
    }
  }

}
