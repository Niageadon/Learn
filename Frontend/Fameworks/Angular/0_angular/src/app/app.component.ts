import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  inputValue = '';
  constructor() {
  }

  onInputChange(event: Event) {
    console.log(11, event)
    this.inputValue = (event?.target as HTMLInputElement).value
  }
}
