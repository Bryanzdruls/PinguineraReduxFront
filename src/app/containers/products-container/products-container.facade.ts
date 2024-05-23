import { Injectable } from "@angular/core";
import { Observable, Subscription} from "rxjs";
import { Store } from "@ngrx/store";
import { selectMultiplePriceProductsResponse, selectProducts } from "../../core/store/selectors/products.selector";
import * as ProductActions from '../../core/store/actions/products.actions';
import { ProductStoreModel } from "../../core/models/store/products/products.storemodel";
import { AppState } from "../../core/store/store";
import { IProductEntityListResponseModel } from "../../core/models/product/multiplePrice.model";
import { IProductIdAndQuantityOnlyModel } from "../../core/models/product/productIdQuantity.model";

@Injectable({
  providedIn: 'root'
})
export class ProductContainerFacade {
  constructor(
    private readonly store: Store<AppState>
  ){}

  //#region observables
  products$():Observable<ProductStoreModel[]> {
    return this.store.select(selectProducts)
  }

  calculateMultiplePriceResponse$():Observable<IProductEntityListResponseModel>{
    return this.store.select(selectMultiplePriceProductsResponse)
  }

  //#endregion

  //#region public methods
  getProducts():void {
    this.store.dispatch(ProductActions.loadProducts())
  }

  calculateMultiplePrice(payload:IProductIdAndQuantityOnlyModel){
    this.store.dispatch(ProductActions.calculateMultiplePrice({multiplePriceRequest:payload}))
  }
  //#endregion
}
