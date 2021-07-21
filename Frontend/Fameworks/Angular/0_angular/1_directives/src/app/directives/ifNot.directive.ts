import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {
  @Input('appIfNot') set ifNot(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef)

    } else {
      this.viewContainer.clear()
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }


}
