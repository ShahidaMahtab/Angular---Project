import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ServicesComponent } from './home/services/services.component';
import { WorkComponent } from './home/work/work.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { BlogDetailsComponent } from './home/blogs/blog-details/blog-details.component';
import { ContactComponent } from './home/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
