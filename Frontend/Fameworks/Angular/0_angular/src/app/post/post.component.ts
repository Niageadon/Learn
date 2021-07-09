import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

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
export class PostComponent  implements OnInit {
  @Input('value') model!: IPost
  @ContentChild('info', {static: true}) infoRef!: ElementRef

  ngOnInit() {
    console.log(11, this.infoRef.nativeElement)
  }
}
