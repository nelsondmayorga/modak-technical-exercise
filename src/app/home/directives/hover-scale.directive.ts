import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverScale]',
})
export class HoverScaleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.scaleCard(1.1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scaleCard(1);
  }

  private scaleCard(scaleFactor: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scaleFactor})`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s');
  }
}
