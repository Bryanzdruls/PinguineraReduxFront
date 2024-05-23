import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from '../../../core/models/product/product.model';
import { CreateProductResponse } from '../../../core/models/product/createProductResponse.model';
import { FormProductComponent } from '../../forms/form-product/form-product.component';

@Component({
  selector: 'app-product-block',
  standalone: true,
  imports: [FormProductComponent],
  templateUrl: './product-block.component.html',
  styleUrl: './product-block.component.css'
})
export class ProductBlockComponent {
  @Input() productResponse:CreateProductResponse;
  @Output() formEmitter = new EventEmitter<IProductModel>;

  recibirObjetoDelHijo(formdata:IProductModel) {
    this.formEmitter.emit(formdata);
  }
}
