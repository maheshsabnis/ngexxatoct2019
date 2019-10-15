import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: 'app.simple.component.view.html'
})
export class SimpleComponent implements OnInit {
  message: string;
  name: string;

  constructor() {
    this.message = 'The Simple Component';
    this.name = '';
  }

  display(): void {
    this.message = 'The Click!!!';
  }


  ngOnInit(): void {}
}
