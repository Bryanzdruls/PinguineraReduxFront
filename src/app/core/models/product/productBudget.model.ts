import { IProductModel } from "./product.model"

export interface IProductBudgetModel {
  listIds: number[],
  budget: number
}

export interface IBudgetRequest {
  products:IProductModel[],
  budget:number
}
