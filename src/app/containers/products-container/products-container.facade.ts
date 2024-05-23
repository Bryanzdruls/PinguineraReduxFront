import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";

import { IProductModel } from "../../core/models/product/product.model";
import { IProductEntityListResponseModel } from "../../core/models/product/multiplePrice.model";
import { Store } from "@ngrx/store";
import { selectProducts } from "../../core/store/selectors/products.selector";
import * as ProductActions from '../../core/store/actions/products.actions';
import { ProductStoreModel } from "../../core/models/store/products/products.storemodel";
import { AppState } from "../../core/store/store";

@Injectable({
  providedIn: 'root'
})
export class ProductContainerFacade {
  private subscriptions: Subscription;

  constructor(
    private readonly store: Store<AppState>
  ){}

  //#region observables
  products$():Observable<ProductStoreModel[]> {
    return this.store.select(selectProducts)
  }

  //#endregion

  //#region public methods
  getProducts():void {
    this.store.dispatch(ProductActions.loadProducts())
  }
  //#endregion
}
