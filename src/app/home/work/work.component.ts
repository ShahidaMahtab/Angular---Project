import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  images = [
    {
      src: 'assets/images/work/1.jpg',
      alt: 'Image 1',
    },
    {
      src: 'assets/images/work/2.jpg',
      alt: 'Image 2',
    },
    {
      src: 'assets/images/work/3.jpg',
      alt: 'Image 3',
    },
    {
      src: 'assets/images/work/4.jpg',
      alt: 'Image 4',
    },
    {
      src: 'assets/images/work/5.jpg',
      alt: 'Image 5',
    },
    {
      src: 'assets/images/work/6.jpg',
      alt: 'Image 6',
    },
    {
      src: 'assets/images/work/7.jpg',
      alt: 'Image 7',
    },
  ];
}
