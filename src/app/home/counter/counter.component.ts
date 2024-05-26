import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  counters = [
    { count: 42, label: 'Web Design Projects' },
    { count: 123, label: 'Happy Clients' },
    { count: 15, label: 'Award Winner' },
    { count: 99, label: 'Cup of Coffee' },
    { count: 24, label: 'Members' },
  ];
}
