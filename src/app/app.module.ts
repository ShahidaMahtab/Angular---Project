import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SwiperDirectiveDirective } from './swiper-directive.directive';

import { MenuOutline } from '@ant-design/icons-angular/icons';
import {
  ClockCircleOutline,
  FundOutline,
  DesktopOutline,
  ReadOutline,
  HomeOutline,
  ExpandOutline,
  DownOutline,
  WechatOutline,
  FacebookOutline,
  FacebookFill,
  LinkedinOutline,
  InstagramOutline,
  TwitterOutline,
  PictureOutline,
  EyeFill,
  CommentOutline,
  EnvironmentOutline,
  InstagramFill,
  YoutubeFill,
  LinkedinFill,
  GooglePlusOutline,
  DribbbleOutline,
  TwitterSquareFill,
  TeamOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzSpinModule } from 'ng-zorro-antd/spin';
const icons: IconDefinition[] = [
  MenuOutline,
  ClockCircleOutline,
  FundOutline,
  DesktopOutline,
  ReadOutline,
  HomeOutline,
  ExpandOutline,
  DownOutline,
  WechatOutline,
  FacebookOutline,
  LinkedinOutline,
  InstagramOutline,
  TwitterOutline,
  FacebookFill,
  PictureOutline,
  EyeFill,
  CommentOutline,
  EnvironmentOutline,
  InstagramFill,
  YoutubeFill,
  LinkedinFill,
  GooglePlusOutline,
  DribbbleOutline,
  TwitterSquareFill,
  TeamOutline,
];
registerLocaleData(en);
/* import { register } from 'swiper/element/bundle';

register(); */
@NgModule({
  declarations: [AppComponent],
  imports: [
    NzIconModule.forRoot(icons),
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSpinModule,
    RouterModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
