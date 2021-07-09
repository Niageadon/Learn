import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IPost} from "./post/post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  posts: IPost[] = [
    {
      title: 'title',
      text: 'text',
      id: 1
    }
  ]

  addPost(post: IPost) {
    this.posts.unshift(post)
  }
  removePost(post: IPost) {
    console.log(11, post)
    const index = this.posts.findIndex(el => el === post)
    this.posts.splice(index, 1)
  }

  ngOnInit() {
    setTimeout(() => {
      this.posts[0].title = 'aboba'
    }, 3000)
  }
}
