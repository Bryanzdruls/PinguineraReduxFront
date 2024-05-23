import { IProductModel } from "./product.model"

export interface IBudgetRequest {
  providerId:string,
  registrationDate:string
  productIds: string[],
  budget: number
}

export interface IBudgetResponse {
  copiesResponse:IProductModel[],
}
