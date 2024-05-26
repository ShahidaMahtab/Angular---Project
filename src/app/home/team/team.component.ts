import { Component, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers: any = [
    {
      imageUrl: 'assets/images/team/1.jpg',
      name: 'James Anderson',
      position: 'Graphics design',
    },
    {
      imageUrl: 'assets/images/team/2.jpg',
      name: 'David Martinez', // Consider using unique names
      position: 'Web development',
    },
    {
      imageUrl: 'assets/images/team/3.jpg',
      name: 'William Taylor',
      position: 'Marketing',
    },
    // Add more team members here
  ];
}
