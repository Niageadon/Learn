import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggle = false
  constructor() {
  }

  onButtonClick(event: Event) {
    this.toggle = !this.toggle
  }

}
