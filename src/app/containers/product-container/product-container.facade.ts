import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { CreateProductResponse } from "../../core/models/product/createProductResponse.model";
import { IProductModel } from "../../core/models/product/product.model";
import { Store } from "@ngrx/store";
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
  //#endregion

  //#region public methods
  initSubscriptions():void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions():void {
    this.subscriptions.unsubscribe();
  }

  createProduct(productData:IProductModel): void{

  }
  //#endregion

}
