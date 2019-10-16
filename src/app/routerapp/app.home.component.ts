import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `<div>
    <h2>Home Component</h2>
    <div>{{message}}</div>
  </div>`
})
export class HomeComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'This is Hoem Component';
  }

  ngOnInit(): void { }
}
