import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  style = {
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    backgroundColor: 'red'
  }
  constructor() {
  }


}
