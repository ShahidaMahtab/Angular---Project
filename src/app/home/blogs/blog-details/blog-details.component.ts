import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnDestroy {
  blogId: any;
  heroHeight = 100;
  blogDetail: any;
  searchField: string = '';
  searchedArticles: any[] = [];
  private subs = new SubSink();
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.blogId = params.get('id');
    });
  }
  goback() {
    window.history.back();
  }
  ngOnInit(): void {
    this.getBlogDetails();
  }
  getBlogDetails(): void {
    this.subs.sink = this.dataService.getData().subscribe((data) => {
      this.blogDetail = data.find((blog: any) => blog.id === this.blogId);
      console.log(this.blogDetail);
      this.searchedArticles = this.blogDetail.articles;
    });
  }
  onSubmit() {
    const searchTerm = this.searchField.toLowerCase();
    this.searchedArticles = this.blogDetail.articles.filter((article: any) => {
      return article.title.toLowerCase().includes(searchTerm);
    });
    console.log(this.searchedArticles);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
