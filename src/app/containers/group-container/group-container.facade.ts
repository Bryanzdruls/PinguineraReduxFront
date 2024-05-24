import { Injectable } from "@angular/core"
import { Store } from "@ngrx/store";
import { AppState } from "../../core/store/store";
import * as ProductActions from '../../core/store/actions/products.actions';
import { Observable } from "rxjs";
import { ProductStoreModel } from "../../core/models/store/products/products.storemodel";
import { selectGroupsResponse, selectProducts, selectProviderId } from "../../core/store/selectors/products.selector";
import { GroupRequest, GroupResponse } from '../../core/models/product/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupContainerFacade {

  constructor(
    private readonly store: Store<AppState>
  ){}

  //#region observables
  providerId$():Observable<string>{
    return this.store.select(selectProviderId)
  }

  products$():Observable<ProductStoreModel[]> {
    return this.store.select(selectProducts)
  }

  groupResponse$():Observable<GroupResponse>{
    return this.store.select(selectGroupsResponse)
  }
  //#endregion

  //#region public methods
  getProviderId():void{
    this.store.dispatch(ProductActions.loadProviderId())
  }

  getProducts():void {
    this.store.dispatch(ProductActions.loadProducts())
  }

  calculateGroups(groupRequest:GroupRequest){
    this.store.dispatch(ProductActions.calculateGroup({groupRequest}));
  }
  //#endregion
}
