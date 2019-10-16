import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about-component',
  template: `<div>
    <h2>About Component</h2>
    <div>{{message}}</div>
    <br/>
    <input type="button" value="Navigate to Contact" (click)="navigaetToContact()"/>
  </div>`
})
export class AboutComponent implements OnInit {
  message: string;
  // inject the ActivatedRoute in the ctor to subscribe for
  // route parameter
  // inject Router to explicit or conditional routing
  constructor(private router: Router, private act: ActivatedRoute) {
    this.message = 'This is About Component';
  }

  ngOnInit(): void {
    this.act.params.subscribe(p => {
      this.message += p.id;
    });
  }
  navigaetToContact(): void {
    this.router.navigate(['contact']);
  }
}
