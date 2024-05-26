import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent {
  @ViewChild('brandSwiper') brandSwiper: any;
  imagePaths: string[] = [
    'assets/images/partner/1.png',
    'assets/images/partner/2.png',
    'assets/images/partner/3.png',
    'assets/images/partner/4.png',
    'assets/images/partner/5.png',
    'assets/images/partner/6.png',
    'assets/images/partner/1.png',
    'assets/images/partner/2.png',
  ];
  swiperParams: any = {
    slidesPerView: 6,

    breakpoints: {
      1199: {
        slidesPerView: 6,
      },
      991: {
        slidesPerView: 5,
      },
      767: {
        slidesPerView: 4,
      },
      575: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
    on: {
      init() {
        // ...
      },
    },
  };

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('.brandSwiper');
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperParams);
      /*  if (this.brandSwiper && this.brandSwiper.swiper) {
        this.brandSwiper.swiper.update(); // Update swiper when slides change dynamically
      } */
    }
  }
}
