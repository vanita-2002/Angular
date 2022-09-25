import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces/product.interface'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

@Input() productDisplay!:Product
  constructor() { }

  ngOnInit(): void {
  }

}
