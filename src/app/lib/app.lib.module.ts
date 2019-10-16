import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/app.first.component';
import { SecondComponent } from './components/app.second.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'second', component: SecondComponent }
];


@NgModule({
  declarations: [FirstComponent, SecondComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LibModule { }
