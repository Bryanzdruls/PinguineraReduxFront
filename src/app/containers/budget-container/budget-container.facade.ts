import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/store/store";
import { Observable } from "rxjs";
import { IProductModel } from "../../core/models/product/product.model";
import { selectBudgetResponse, selectProducts } from "../../core/store/selectors/products.selector";
import * as ProductActions from '../../core/store/actions/products.actions';
import { IBudgetResponse } from "../../core/models/product/productBudget.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetContainerFacade {


  constructor(
    private readonly store: Store<AppState>
  ){}

  //#region observables
  products$():Observable<IProductModel[]> {
    return this.store.select(selectProducts)
  }
  budgetResponse$():Observable<IBudgetResponse>{
    return this.store.select(selectBudgetResponse)
  }
  //#endregion

  //#region public methods
  getProducts():void {
    this.store.dispatch(ProductActions.loadProducts())
  }

  calculateBudget(payload):void{
      this.store.dispatch(ProductActions.calculateBudget(payload))
  }
  //#endregion
}
