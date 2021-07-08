import { Component, OnInit, Input } from '@angular/core';

export interface IPost {
  title: string,
  text: string,
  id?: number
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input('value') model!: IPost

}
