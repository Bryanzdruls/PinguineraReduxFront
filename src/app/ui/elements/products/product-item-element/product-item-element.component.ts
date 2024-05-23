import { Component, Input } from '@angular/core';
import { QuantityElementComponent } from '../quantity-element/quantity-element.component';
import { ProductStoreModel } from '../../../../core/models/store/products/products.storemodel';

@Component({
  selector: 'app-product-item-element',
  standalone: true,
  imports: [QuantityElementComponent],
  templateUrl: './product-item-element.component.html',
  styleUrl: './product-item-element.component.css'
})
export class ProductItemElementComponent {
  @Input() product:ProductStoreModel;

  decreaseQuantity(){
    if (this.product.stock> 0) {
      this.product.stock--;
    }
  }

  increaseQuantity(){
    console.log();
    this.product.stock++;
  }

}
