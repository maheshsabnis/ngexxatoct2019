import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
import { StudentComponent } from './components/studentcomponent/app.student.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StudentComponent]
})
export class AppModule { }
