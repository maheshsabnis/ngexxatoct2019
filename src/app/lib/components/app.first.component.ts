import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
     <h2>The First Component</h2>
     <a [routerLink]="['']">First</a>
     <a [routerLink]="['second']">Second</a>
     <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let i of values">
            <td>{{i.Id}}</td>
            <td>{{i.Name}}</td>
          </tr>
        </tbody>
     </table>
  `
})
export class FirstComponent implements OnInit {
  values: Array<any>;
  constructor() {
    this.values = new Array<any>();
    this.values.push({ Id: 1, Name: 'A' });
    this.values.push({ Id: 2, Name: 'B' });
    this.values.push({ Id: 3, Name: 'C' });
  }
  ngOnInit(): void { }
}
