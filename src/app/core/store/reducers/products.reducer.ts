import { createReducer, on } from "@ngrx/store";
import { ProductStoreModel } from "../../models/store/products/products.storemodel";
import * as ProductActions from '../actions/products.actions';
import { IProductEntityListResponseModel } from "../../models/product/multiplePrice.model";
import { IProductIdAndQuantityOnlyModel } from "../../models/product/productIdQuantity.model";
import { IBudgetRequest, IBudgetResponse } from "../../models/product/productBudget.model";
import { IProductModelResponse } from "../../models/product/product.model";
import { GroupRequest, GroupResponse } from "../../models/product/group.model";
import { state } from "@angular/animations";

export interface ProductsState {
  providerId: string;
  products: ProductStoreModel[];
  productResponse: IProductModelResponse;
  multiplePriceRequest: IProductIdAndQuantityOnlyModel
  multiplePriceResponse: IProductEntityListResponseModel
  budgetRequest:IBudgetRequest
  budgetResponse:IBudgetResponse
  groupRequest: GroupRequest,
  groupResponse: GroupResponse
}

export const initialState: ProductsState = {
  providerId:null,
  products: [],
  productResponse: null,
  multiplePriceRequest:null,
  multiplePriceResponse: null,
  budgetRequest:null,
  budgetResponse:null,
  groupRequest: null,
  groupResponse: null
}

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => ({ ...state})),
  on(ProductActions.loadProductsSuccess, (state, action) => ({ ...state, products: action.products })),

  on(ProductActions.createProduct, state => ({ ...state})),
  on(ProductActions.createProductSuccess, (state, action) => ({ ...state, productResponse: action.product })),

  on(ProductActions.modifyProduct, (state, action)=> (
    {...state,
      products: state.products.map(product =>
        product.copyId === action.product.copyId
          ? { ...product, stock: action.product.stock }
          : product
      )
    })),

  on(ProductActions.calculateMultiplePrice, (state,action) => ({...state,multiplePriceRequest:action.multiplePriceRequest})),
  on(ProductActions.calculateMultiplePriceSuccess, (state,action) => ({...state, multiplePriceResponse: action.products})),

  on(ProductActions.calculateBudget, (state,action) => ({...state,budgetRequest:action.budgetRequest})),
  on(ProductActions.calculateBudgetSuccess, (state,action) => ({...state,budgetResponse:action.budgetResponse})),

  on(ProductActions.calculateGroup, (state, action) => ({...state})),
  on(ProductActions.calculateGroupSuccess, (state,action) => ({...state, groupResponse:action.groupResponse}))
)
