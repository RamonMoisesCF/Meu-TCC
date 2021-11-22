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
  displayedColumns = ['id', 'name', 'bpm', /* 'bpmReferencia', */ 'pressaoArterial', 
  /* 'pressaoArterialReferencia', */ 'saturacao', /* 'saturacaoReferencia', */ 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  public mostraCoracao( bpm, bpmReferencia ) {

    /* Função de Reload */
    setTimeout(function(){
      window.location.reload();
   }, 5000);

    console.log(bpm, bpmReferencia)
    if (bpm > bpmReferencia) {
      return true 
    }
    return false
  }

  public mostraPressao( pressaoArterial, pressaoArterialReferencia ) {
    console.log(pressaoArterial, pressaoArterialReferencia)
    if (pressaoArterial > pressaoArterialReferencia) {
      return true 
    }
    return false
  }

  public mostraSaturacao( saturacao, saturacaoReferencia ) {
    console.log(saturacao, saturacaoReferencia)
    if (saturacao < saturacaoReferencia) {
      return true
    }
    return false
  }
}
