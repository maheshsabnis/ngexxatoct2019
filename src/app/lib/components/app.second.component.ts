import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template: `
     <h2>The Second Component</h2>
     <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let i of values">
            <td>{{i.Id}}</td>
            <td>{{i.Name}}</td>
            <td>{{i.Age}}</td>
          </tr>
        </tbody>
     </table>
  `
})
export class SecondComponent implements OnInit {
  values: Array<any>;
  constructor() {
    this.values = new Array<any>();
    this.values.push({ Id: 1, Name: 'A', Age: 10 });
    this.values.push({ Id: 2, Name: 'B', Age: 20 });
    this.values.push({ Id: 3, Name: 'C', Age: 30 });
  }
  ngOnInit(): void { }
}
