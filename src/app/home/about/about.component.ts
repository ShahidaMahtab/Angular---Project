import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  aboutImages = [
    { imageUrl: 'assets/images/about/1.jpg' },
    { imageUrl: 'assets/images/about/2.jpg' },
    { imageUrl: 'assets/images/about/3.jpg' },
  ];
}
