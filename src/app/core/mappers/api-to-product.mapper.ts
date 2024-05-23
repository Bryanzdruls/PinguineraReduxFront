import { Injectable } from "@angular/core";
import { IProductModel, IProductModelResponse } from "../models/product/product.model";
import { IProductIdAndQuantityOnlyModel } from "../models/product/productIdQuantity.model";
import { IMultiplePriceModel, IProductEntityListResponseModel } from "../models/product/multiplePrice.model";
import { CreateProductResponse } from "../models/product/createProductResponse.model";
import { ProductStoreModel } from "../models/store/products/products.storemodel";
import { IBudgetRequest, IBudgetResponse } from "../models/product/productBudget.model";

@Injectable({
  providedIn: 'root'
})
export class ApiToProductMapper {
  map(payload: any): IProductModelResponse {
    return {
      providerId: payload.providerId,
      copyId: payload.copyId,
      title: payload.title,
      author: payload.author,
      stock: payload.stock,
      finalPrice: payload.finalPrice,
      copyType: payload.copyType,
    }
  }

  mapArray(payloads:any):ProductStoreModel[]{
    return payloads.map((payload) => (
      {
        providerId: payload.providerId,
        copyId: payload.copyId,
        title: payload.title,
        author: payload.author,
        stock: payload.stock-1,
        finalPrice: payload.finalPrice,
        type: payload.copyType,
      }
    ))
  }

  mapToMultipleProductsAndClientTypeDto(payload: any): IProductIdAndQuantityOnlyModel {
    const newProductsIdsQuantity =payload.multiplePriceRequest.productsIdsQuantity.map(product => ({
      ...product,
      quantity: product.quantity + 1
    }));
    const filteredPayload = newProductsIdsQuantity.filter(item => item.quantity > 0);

    const productIdList = filteredPayload.map(item => ({
      id: item.id,
      quantity: item.quantity
    }));

    return {
      providerId: payload.multiplePriceRequest.providerId,
      productsIdsQuantity: productIdList,
      registrationDate:payload.multiplePriceRequest.registrationDate
    };
  }

  multiplePriceResponse(payload:IProductEntityListResponseModel):IProductEntityListResponseModel{
    return {
      copiesResponse: payload.copiesResponse,
      priceTotal: payload.priceTotal,
      discountMayorTotal: payload.discountMayorTotal,
      discountCustomerTotal: payload.discountCustomerTotal,
      incrementTotal: payload.incrementTotal,
    }
  }

  mapToBudgetRequest(payload: any): IBudgetRequest {
    return {
      providerId:payload.providerId,
      productIds:payload.productIds,
      budget: payload.budget.budget,
      registrationDate: payload.registrationDate
    };
  }

  budgetResponse(payload:any):IBudgetResponse{
    const newCopiesResponse = payload.copiesResponse.map(copie =>({...copie,finalPrice:copie.price}));
    return {
      copiesResponse: newCopiesResponse,
    }
  }
}
