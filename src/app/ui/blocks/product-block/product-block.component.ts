import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel, IProductModelResponse } from '../../../core/models/product/product.model';
import { CreateProductResponse } from '../../../core/models/product/createProductResponse.model';
import { FormProductComponent } from '../../forms/form-product/form-product.component';
import { ProductStoreModel } from '../../../core/models/store/products/products.storemodel';

@Component({
  selector: 'app-product-block',
  standalone: true,
  imports: [FormProductComponent],
  templateUrl: './product-block.component.html',
  styleUrl: './product-block.component.css'
})
export class ProductBlockComponent {
  @Input() productResponse:IProductModelResponse;
  @Output() formEmitter = new EventEmitter<IProductModel>;

  recibirObjetoDelHijo(formdata:IProductModel) {
    this.formEmitter.emit(formdata);
  }
}
