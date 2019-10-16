import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './sharedmodule/app.shared.module';

import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simple.component';
import { StudentComponent } from './components/studentcomponent/app.student.component';
import { StudentFormComponent } from './components/studentformcomponent/app.studentform.component';
import { CourseParentComponent } from './components/masterdetails/app.courseparent.component';
import { StudentChildComponent } from './components/masterdetails/app.studentchild.component';
import { CourseSenderComponent } from './components/masterdetailscommunication/app.coursesender.component';
import { StudentReceiverComponent } from './components/masterdetailscommunication/app.studentreceiver.component';
import { ProductComponent } from './components/productservicecomponent/app.product.component';
import { UtilityComponent } from './components/utilitycomponent/app.utility.component';
import { HomeComponent } from './routerapp/app.home.component';
import { AboutComponent } from './routerapp/app.about.component';
import { ContactComponent } from './routerapp/app.contact.component';
import { MainComponent } from './routerapp/app.main.component';
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    StudentComponent, StudentFormComponent,
    CourseParentComponent,
    StudentChildComponent,
    CourseSenderComponent,
    StudentReceiverComponent,
    ProductComponent,
    UtilityComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MainComponent

  ],
  imports: [
    BrowserModule, FormsModule, SharedModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
