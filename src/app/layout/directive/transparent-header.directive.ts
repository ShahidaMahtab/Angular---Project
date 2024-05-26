import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTransparentHeader]',
})
export class TransparentHeaderDirective {
  @Input()
  heroHeight: number = 0; // Optional input to set hero height from component

  private initialY = 0;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  onScroll() {
    const currentY = window.scrollY;
    const heroHeight =
      this.heroHeight || this.el.nativeElement.parentElement.offsetHeight; // Get hero height dynamically if not provided

    if (currentY > heroHeight) {
      this.el.nativeElement.style.background = '#bf4547';
    } else {
      this.el.nativeElement.style.background = 'transparent';
    }
  }
}
