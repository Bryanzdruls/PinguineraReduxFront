import { Action, ActionReducer } from "@ngrx/store";
import { ProductsState, productReducer } from "./reducers/products.reducer";
import { ProductsEffects } from "./effects/products.effects";

export interface AppState {
  products: ProductsState;
}

export interface AppStore {
  products: ActionReducer<ProductsState, Action>;
}

export const appStore: AppStore = {
  products: productReducer
}

// Definicion de efectos
export const appEffects = [ProductsEffects];
