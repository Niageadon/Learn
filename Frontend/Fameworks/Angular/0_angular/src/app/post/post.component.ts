import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';

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
export class PostComponent  implements
  OnInit, OnChanges, DoCheck, OnDestroy
{
  @Input('value') model!: IPost
  @Output() onRemove: EventEmitter<IPost> = new EventEmitter<IPost>()
  @ContentChild('info', {static: true}) infoRef!: ElementRef

  remove() {
    this.onRemove.emit(this.model)
  }
  ngOnInit() {
    console.log('ngOnInit')
    //console.log(11, this.infoRef.nativeElement)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes)
  }
  ngDoCheck() {
    console.log('ngDoCheck')
  }
  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
