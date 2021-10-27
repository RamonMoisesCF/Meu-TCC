import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'bpm', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  /* validarBpm(any Produtos){
    if (bpm > 200){
      return true
    }

    enviar 
  } */

  public mostraCoracao( bpm ) {
    console.log(bpm)
    if (bpm > 200) {
      return true
    }
    return false
  }



}
