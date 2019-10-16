import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  template: `<div>
    <h2>Contact Component</h2>
    <div>{{message}}</div>
    <br/>
    <a [routerLink]="['student']">Student</a>
    <br/>
    <router-outlet></router-outlet>
  </div>`
})
export class ContactComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'This is Contact Component';
  }

  ngOnInit(): void { }
}
