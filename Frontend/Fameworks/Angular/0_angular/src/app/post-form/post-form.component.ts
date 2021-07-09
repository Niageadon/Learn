import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {IPost} from "../post/post.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<IPost> = new EventEmitter<IPost>()
  @ViewChild('titleInput') inputRef!: ElementRef
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

  focusTitle() {
    this.inputRef.nativeElement.focus()
  }
}
