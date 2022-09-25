import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product-service.service";
import { Product } from "../shared/interfaces/product.interface";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products !:Product[]
  selectedProduct!:Product
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts():void{
    this.products = this.productService.fetchProducts();
  }

  product(product:Product){
    this.selectedProduct = product
  }
}
// student => logger
// employee=> mock
// product =>product-service
