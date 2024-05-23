import { createAction, props } from "@ngrx/store";
import { ProductStoreModel } from "../../models/store/products/products.storemodel";
import { IProductModel, IProductModelResponse } from "../../models/product/product.model";
import { IProductIdAndQuantityOnlyModel } from "../../models/product/productIdQuantity.model";
import { IProductEntityListResponseModel } from "../../models/product/multiplePrice.model";
import { IBudgetRequest, IBudgetResponse } from "../../models/product/productBudget.model";

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction('[Products] Load Products Success', props<{ products: ProductStoreModel[] }>());
export const loadProductsFailed = createAction('[Products] Load Products Failed', props<{ error: string }>());

export const createProduct = createAction('[Products] Create Product',props<{product:IProductModel}>());
export const createProductSuccess = createAction('[Products] Create Product Success',props<{product:IProductModelResponse}>());
export const createProductFailed = createAction('[Products] Create Product Failed', props<{ error: string }>());



export const calculateMultiplePrice = createAction(
  '[Products] Calculate MultiplePrice',
  props<{multiplePriceRequest:IProductIdAndQuantityOnlyModel}>()
);
export const calculateMultiplePriceSuccess = createAction('[Products] Calculate MultiplePrice Success',props<{products:IProductEntityListResponseModel}>());
export const calculateMultiplePriceFailure = createAction('[Products] Calculate MultiplePrice Failed',props<{error:string}>());



export const modifyProduct = createAction(
  '[Products] Modify Products',
  props<{product:ProductStoreModel}>()
)

export const calculateBudget = createAction(
  '[Products] Calculate Budget',
  props<{budgetRequest:IBudgetRequest}>()
)
export const calculateBudgetSuccess = createAction(
  '[Products] Calculate Budget Success',
  props<{budgetResponse:IBudgetResponse}>()
)
export const calculateBudgetFailure = createAction('[Products] Calculate Budget Failed',props<{error:string}>());
