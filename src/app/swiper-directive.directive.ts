import { Directive, ElementRef, Input } from '@angular/core';
//import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiperDirective]',
})
export class SwiperDirectiveDirective {
  /*   swiperElement: HTMLElement;

  @Input('config')
  config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);
  } */
}
