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
  displayedColumns = ['id', 'name', 'bpm',/* 'bpmReferencia', */ 'pressaoArterial', 
  /* 'pressaoArterialReferencia', */ 'saturacao', /* 'saturacaoReferencia', */ 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })

  /* Função de Reload */
  setTimeout(function(reload){
  window.location.reload();
  }, 5000);
  
  }

  public mostraCoracao( bpm, bpmReferencia, bpmInferior ) {

    if (bpm > bpmReferencia || bpm < bpmInferior && bpm > 0) {
      return true 
    }
    return false
  }

  public mostraPressao( pressaoArterial, pressaoArterialReferencia, pressaoArterialInferior ) {
    if (pressaoArterial > pressaoArterialReferencia || pressaoArterial < pressaoArterialInferior && pressaoArterial > 0) {
      return true 
    }
    return false
  }

  public mostraSaturacao( saturacao, saturacaoReferencia ) {
    console.log(saturacao, saturacaoReferencia)
    if (saturacao < saturacaoReferencia && saturacao > 0 || saturacao > 100) {
      return true
    }
    return false
  }
}
