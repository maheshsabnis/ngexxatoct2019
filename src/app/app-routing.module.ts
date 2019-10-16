import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routerapp/app.home.component';
import { AboutComponent } from './routerapp/app.about.component';
import { ContactComponent } from './routerapp/app.contact.component';
import { StudentFormComponent } from './components/studentformcomponent/app.studentform.component';

// the LibModule will be Lazy-Loaded

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent,
    children: [{
      path: 'student', component: StudentFormComponent
    }]
  },
  { path: 'lazy', loadChildren: './lib/app.lib.module#LibModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
