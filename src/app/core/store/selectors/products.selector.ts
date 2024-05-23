import { createSelector } from "@ngrx/store";
import { AppState } from "../store";
import { ProductsState } from "../reducers/products.reducer";

export const selectProductsState = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
)
