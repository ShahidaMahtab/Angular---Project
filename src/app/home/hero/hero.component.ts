import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  slides = [
    { title: 'Welcome', subtitle: 'to Mogo' },
    { title: 'Mogo', subtitle: 'Work' },
    { title: 'Mogo', subtitle: 'About' },
    { title: 'Mogo', subtitle: 'Contacts' },
  ];
}
