import { Component, Input } from '@angular/core';
import { QuantityElementComponent } from '../../products/quantity-element/quantity-element.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/store';
import { ProductStoreModel } from '../../../../core/models/store/products/products.storemodel';
import * as ProductActions from '../../../../core/store/actions/products.actions'
@Component({
  selector: 'app-budget-element',
  standalone: true,
  imports: [QuantityElementComponent],
  templateUrl: './budget-element.component.html',
  styleUrl: './budget-element.component.css'
})
export class BudgetElementComponent {
  @Input() product:ProductStoreModel;
  constructor(private store: Store<AppState>) {}
  decreaseQuantity(){
    if (this.product.stock> 0) {
      const newProduct = {...this.product, stock: this.product.stock-1}
      this.store.dispatch(ProductActions.modifyProduct({product:newProduct}));
    }
  }

  increaseQuantity(){
    if (!(this.product.stock >=1)) {
      const newProduct = {...this.product, stock: this.product.stock+1}
      this.store.dispatch(ProductActions.modifyProduct({product:newProduct}));
    }
  }
}
