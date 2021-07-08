import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IPost} from "../post/post.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<IPost> = new EventEmitter<IPost>()
  title = ''
  text = ''
  ngOnInit(): void {
  }
  createPost() {
    if(this.title.trim() && this.text.trim()) {
      const post: IPost = {
        title: this.title,
        text: this.text
      }
      this.onSubmit.emit(post)
    }
    this.title = this.text = ''
  }
}
