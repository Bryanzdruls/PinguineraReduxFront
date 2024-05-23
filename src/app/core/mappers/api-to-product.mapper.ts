import { Injectable } from "@angular/core";
import { IProductModel } from "../models/product/product.model";
import { IProductIdAndQuantityOnlyModel } from "../models/product/productIdQuantity.model";
import { IMultiplePriceModel, IProductEntityListResponseModel } from "../models/product/multiplePrice.model";
import { IProductBudgetModel } from "../models/product/productBudget.model";
import { CreateProductResponse } from "../models/product/createProductResponse.model";
import { ProductStoreModel } from "../models/store/products/products.storemodel";

@Injectable({
  providedIn: 'root'
})
export class ApiToProductMapper {
  map(payload: any): IProductModel {
    return {
      providerId: payload.providerId,
      copyId: payload.copyId,
      title: payload.title,
      author: payload.author,
      stock: payload.stock,
      publicationYear: payload.publicationyear,
      finalPrice: payload.finalPrice,
      type: payload.copytype,
    }
  }

  mapArray(payloads:any):ProductStoreModel[]{
    return payloads.map((payload) => (
      {
        providerId: payload.providerId,
        copyId: payload.copyId,
        title: payload.title,
        author: payload.author,
        stock: payload.stock,
        finalPrice: payload.finalPrice,
        copytype: payload.copytype,
      }
    ))
  }

  mapToMultipleProductsAndClientTypeDto(payload: any): IProductIdAndQuantityOnlyModel {
    const filteredPayload = payload.filter(item => item.quantity > 0);

    const productIdList = filteredPayload.map(item => ({
      id: item.id,
      quantity: item.quantity
    }));

    return {
      productIdList: productIdList
    };
  }

  multiplePriceResponse(payload:IProductEntityListResponseModel):IProductEntityListResponseModel{
    return {
      productEntityList: payload.productEntityList,
      totalFinalPrice: payload.totalFinalPrice,
    }
  }

  mapToBudgetRequest(payload: any): IProductBudgetModel {
    return {
      listIds:payload.products.map(item => item.id),
      budget: payload.budget.budget
    };
  }

  budgetResponse(payload:any):IMultiplePriceModel[]{
    return payload.map((item) =>({
      name: item.name,
      basePrice: item.basePrice,
      quantity: item.quantity,
      productType: item.productType,
      finalPrice: item.finalPrice,
      discount:{
        DiscountDetalMayor: item.discount.DiscountDetalMayor,
        IncrementDetalMayor: item.discount.IncrementDetalMayor,
      },
      finalPricePerQuantity: item.finalPricePerQuantity,
    }))

  }
}
