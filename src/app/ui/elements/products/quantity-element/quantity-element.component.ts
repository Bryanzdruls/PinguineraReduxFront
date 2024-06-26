import { Component, Input } from '@angular/core';
import { ProductStoreModel } from '../../../../core/models/store/products/products.storemodel';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/store';
import * as ProductActions from '../../../../core/store/actions/products.actions'
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

  constructor(private store: Store<AppState>) {}

  decreaseQuantity(){
    if (this.product.stock> 0) {
      const newProduct = {...this.product, stock: this.product.stock-1}
      this.store.dispatch(ProductActions.modifyProduct({product:newProduct}));
    }
  }

  increaseQuantity(max:number){
    if (max == undefined) {
      const newProduct = {...this.product, stock: this.product.stock+1}
      this.store.dispatch(ProductActions.modifyProduct({product:newProduct}));
    }else{
      if (!(this.product.stock >=max)) {
        const newProduct = {...this.product, stock: this.product.stock+1}
        this.store.dispatch(ProductActions.modifyProduct({product:newProduct}));
      }
    }
  }
}
