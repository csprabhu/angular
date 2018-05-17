import { Component } from '@angular/core';
import{data} from '../../db'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  products=data.products;
  //product=this.products[0];
  product={}//if no product display 'no product';
  constructor() { }

  
}
