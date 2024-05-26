import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private nzImageService: NzImageService, private router: Router) {}
  blogs = [
    {
      id: 1,
      title: 'Cyber Shield: Protecting Your Digital',
      date: 'Jan 9',
      year: 2024,
      image: 'assets/images/blogs/1.jpg',
    },
    {
      id: 2,
      title: 'Cloud Oasis: Your Digital Refuge',
      date: 'Jan 9',
      year: 2024,
      image: 'assets/images/blogs/2.jpg',
    },
    {
      id: 3,
      title: 'Safeguarding Your Information',
      date: 'Jan 9',
      year: 2024,
      image: 'assets/images/blogs/3.jpg',
    },
  ];

  navigateToBlog(blogId: any): void {
    // this.router.navigateByUrl(`/blogs/${blogId}`);
    /* window.location.href = `/blogs/${blogId}`;
    window.scrollTo(0, 0);  */
  }
  //image preview
  openImagePreview(image: any): void {
    const images = [
      {
        src: image,
        alt: '',
      },
    ];
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }
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
      src: 'assets/images/work/6.jpg',
      alt: 'Image 5',
    },
    {
      src: 'assets/images/work/7.jpg',
      alt: 'Image 6',
    },
    {
      src: 'assets/images/work/1.jpg',
      alt: 'Image 7',
    },
    {
      src: 'assets/images/work/2.jpg',
      alt: 'Image 8',
    },
    {
      src: 'assets/images/work/3.jpg',
      alt: 'Image 9',
    },
  ];
}
