import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event', "$event.target"]) onClick(event: Event, target: EventTarget) {
    console.log(11, event, target)
  }

  @HostListener('mouseenter') onEnter(event: Event, target: EventTarget) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave') onLeave(event: Event, target: EventTarget) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
  }
}
