import { createReducer, on } from "@ngrx/store";
import { ProductStoreModel } from "../../models/store/products/products.storemodel";
import * as ProductActions from '../actions/products.actions';

export interface ProductsState {
  products: ProductStoreModel[];
}

export const initialState: ProductsState = {
  products: []
}

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => ({ ...state, loading: true })),
  on(ProductActions.loadProductsSuccess, (state, action) => ({ ...state, todos: action.products })),
)
