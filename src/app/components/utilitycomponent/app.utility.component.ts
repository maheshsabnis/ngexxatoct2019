import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../sharedmodule/services/app.utility.service';

@Component({
  selector: 'app-utility-component',
  template: `
     <div>
       <strong> The Upper Case String </strong>
       <p>{{upperString}}</p>
     </div>
     <br/>
     <div>
     <strong> The Lower Case String </strong>
     <p>{{lowerString}}</p>
   </div>
  `
})
export class UtilityComponent implements OnInit {
  name: string;
  upperString: string;
  lowerString: string;
  constructor(private serv: UtilityService) {
    this.name = 'Angular Shared Module Service';
    this.upperString = '';
    this.lowerString = '';
  }

  ngOnInit(): void {
    this.upperString = this.serv.changeCase(this.name, 'U');
    this.lowerString = this.serv.changeCase(this.name, 'L');
  }
}
