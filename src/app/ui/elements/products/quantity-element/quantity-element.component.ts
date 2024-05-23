import { Component, Input } from '@angular/core';
import { ProductStoreModel } from '../../../../core/models/store/products/products.storemodel';

@Component({
  selector: 'app-quantity-element',
  standalone: true,
  imports: [],
  templateUrl: './quantity-element.component.html',
  styleUrl: './quantity-element.component.css'
})
export class QuantityElementComponent {
  @Input() product:ProductStoreModel
  @Input() max:number
  decreaseQuantity(){
    if (this.product.quantity> 0) {
      this.product.quantity--;
    }
  }

  increaseQuantity(max:number){
    if (max == undefined) {
      this.product.quantity++;
    }else{
      if (!(this.product.quantity >=max)) {
        this.product.quantity++;
      }
    }
  }
}
