import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from '../../../core/models/product/product.model';
import { IProductEntityListResponseModel } from '../../../core/models/product/multiplePrice.model';
import { ButtonApiElementComponent } from '../../elements/products/button-api-element/button-api-element.component';
import { MultiplepriceResponseElementComponent } from '../../elements/products/multipleprice-response-element/multipleprice-response-element.component';
import { ProductItemElementComponent } from '../../elements/products/product-item-element/product-item-element.component';
import { ProductStoreModel } from '../../../core/models/store/products/products.storemodel';

@Component({
  selector: 'app-products-array-block',
  standalone: true,
  imports: [ProductItemElementComponent,MultiplepriceResponseElementComponent,ButtonApiElementComponent],
  templateUrl: './products-array-block.component.html',
  styleUrl: './products-array-block.component.css'
})
export class ProductsArrayBlockComponent {
  @Input() products: ProductStoreModel[];
  @Input() multiplePriceResponse: IProductEntityListResponseModel;

  @Output() eventEmmitter = new EventEmitter<ProductStoreModel[]>();
  hasProductWithQuantity(products: any[]): boolean {
    return products.some(product => product.quantity > 0);
  }

  emit(){
    this.eventEmmitter.emit(this.products);
  }
}
