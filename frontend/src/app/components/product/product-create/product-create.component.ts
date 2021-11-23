import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    idade: null,
    telefone: null,
    bpmInferior: null,
    bpmReferencia: null,
    pressaoArterialInferior: null,
    pressaoArterialReferencia: null,
    saturacaoReferencia: null,
    bpm: null,
    pressaoArterial: null,
    saturacao: null
  }

  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit() { }
  

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Paciente criado!')
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
