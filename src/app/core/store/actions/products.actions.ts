import { createAction, props } from "@ngrx/store";
import { ProductStoreModel } from "../../models/store/products/products.storemodel";
import { IProductModel } from "../../models/product/product.model";

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction('[Products] Load Products Success', props<{ products: ProductStoreModel[] }>());
export const loadProductsFailed = createAction('[Products] Load Products Failed', props<{ error: string }>());

export const createProduct = createAction('[Products] Create Product',props<{product:IProductModel}>());
