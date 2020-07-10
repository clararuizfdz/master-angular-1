import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  color = "yellow";
  
  constructor(private el: ElementRef) {
  }

  private highlight(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.color);
  }
 
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight("");
  }
}
