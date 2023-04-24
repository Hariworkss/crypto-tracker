import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency:string= 'INR'
  constructor(){

  }
  sendCurrency(event:any){
    console.log(event)
  }

}
