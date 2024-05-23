import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { CreateProductResponse } from "../../core/models/product/createProductResponse.model";
import { IProductModel, IProductModelResponse } from "../../core/models/product/product.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/store/store";
import { selectProductResponse } from "../../core/store/selectors/products.selector";
import * as ProductActions from '../../core/store/actions/products.actions';
import { ProductStoreModel } from "../../core/models/store/products/products.storemodel";
@Injectable({
  providedIn: 'root'
})
export class ProductContainerFacade {

  private subscriptions: Subscription;

  constructor(
    private readonly store: Store<AppState>

  ){}

  //#region observables
  productResponse$():Observable<IProductModelResponse> {
    return this.store.select(selectProductResponse)
  }
  //#endregion

  //#region public methods
  initSubscriptions():void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions():void {
    this.subscriptions.unsubscribe();
  }

  createProduct(productData:IProductModel): void{
    this.store.dispatch(ProductActions.createProduct({product:productData}))
  }
  //#endregion

}
