import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { ServicesComponent } from './services/services.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DesignComponent } from './design/design.component';
import { WeDoComponent } from './we-do/we-do.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TeamComponent } from './team/team.component';
import { WorkComponent } from './work/work.component';
import { BrandComponent } from './brand/brand.component';
import { ReviewComponent } from './review/review.component';
import { CounterComponent } from './counter/counter.component';
import { Review2Component } from './review2/review2.component';
import { ClientComponent } from './client/client.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MapComponent } from './map/map.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../interceptors/loader.interceptor';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    DesignComponent,
    WeDoComponent,
    TeamComponent,
    WorkComponent,
    BrandComponent,
    ReviewComponent,
    CounterComponent,
    Review2Component,
    ClientComponent,
    BlogsComponent,
    MapComponent,
    ContactComponent,
    BlogDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    CountUpModule,
    NzIconModule,
    NzCollapseModule,
    NzGridModule,
    NzModalModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzBreadCrumbModule,
    NzSpinModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class HomeModule {}
