import { createSelector } from "@ngrx/store";
import { AppState } from "../store";
import { ProductsState } from "../reducers/products.reducer";

export const selectProductsState = (state: AppState) => state.products;

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
)

export const selectProductResponse = createSelector(
  selectProductsState,
  (state: ProductsState) => state.productResponse
)

export const selectMultiplePriceProductsResponse = createSelector(
  selectProductsState,
  (state: ProductsState) => state.multiplePriceResponse
)

export const selectBudgetResponse = createSelector(
  selectProductsState,
  (state: ProductsState) => state.budgetResponse
)

export const selectGroupsResponse = createSelector(
  selectProductsState,
  (state: ProductsState) => state.groupResponse
)

