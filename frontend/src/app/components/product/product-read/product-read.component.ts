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
  displayedColumns = ['id', 'name', 'bpm', 'bpmReferencia', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

   /* public varCoracao (bpmReferencia, bpm){
    console.log(bpmReferencia)
    if (bpmReferencia > bpm) {
      return true
    }
    return false
  }  */

  public mostraCoracao( bpm, bpmReferencia ) {

    console.log(bpm, bpmReferencia)
    if (bpm > bpmReferencia) {
      return true 
    }
    return false
  }
}
