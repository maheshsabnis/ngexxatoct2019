import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/app.product.service';
import { Product } from '../../models/app.products';

@Component({
  selector: 'app-product-component',
  template: `
    <input type="button" value="Get Data" (click)="getData()"/>
    <br/>
    <input type="button" value="Post Data" (click)="postData()"/>
  `
})
export class ProductComponent implements OnInit {
  constructor(private serv: ProductService) { }

  ngOnInit(): void { }

  getData(): void {
    this.serv.getData().subscribe(resp => {
      console.log(JSON.stringify(resp));
    });
  }

  postData(): void {
    let prd = new Product(0, 'Prd0001', 'Laptop', 'IBM', 'ECT', 'Gaming', 120000);
    this.serv.postData(prd).subscribe(resp => {
      console.log(JSON.stringify(resp));
    });
  }

}
