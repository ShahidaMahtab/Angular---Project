import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit, OnDestroy {
  blogs: any;
  private subs = new SubSink();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subs.sink = this.dataService.getData().subscribe((data) => {
      this.blogs = data;
      console.log(this.blogs);
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
