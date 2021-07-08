import { Component } from '@angular/core';
import {IPost} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: IPost[] = [
    {
      title: 'title',
      text: 'text',
      id: 1
    }
  ]
}
