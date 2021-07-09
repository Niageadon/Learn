import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'black'
  @Input() fontWeight: string = 'normal'
  @HostBinding('style.color') elColor = null
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event', "$event.target"]) onClick(event: Event, target: EventTarget) {
    console.log(11, event, target)
  }

  @HostListener('mouseenter') onEnter(event: Event, target: EventTarget) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
  }

  @HostListener('mouseleave') onLeave(event: Event, target: EventTarget) {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
  }
}
