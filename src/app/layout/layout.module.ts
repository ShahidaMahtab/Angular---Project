import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { TransparentHeaderDirective } from './directive/transparent-header.directive';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TransparentHeaderDirective],
  imports: [
    CommonModule,
    NzButtonModule,
    RouterModule,
    NzIconModule,
    NzDrawerModule,
    NzImageModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
