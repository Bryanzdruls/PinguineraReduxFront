import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() quantityChanged: EventEmitter<any> = new EventEmitter();


  decreaseQuantity(){
    if (this.product.stock> 0) {
      this.product.stock--;
      this.quantityChanged.emit(this.product);
    }
  }

  increaseQuantity(){
    console.log();
    this.product.stock++;
    this.quantityChanged.emit(this.product);
  }

}
