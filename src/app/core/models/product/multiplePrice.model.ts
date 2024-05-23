export interface IMultiplePriceModel {
  providerId: string
  copyId: string
  title: string
  author: string
  stock: number
  price: number
  copyType: string
  increment:number,
  discountMayor:number,
  discountCustomer:number,
}

export interface IProductEntityListResponseModel {
  copiesResponse: IMultiplePriceModel[];
  priceTotal:number;
  discountMayorTotal:number;
  discountCustomerTotal:number;
  incrementTotal:number;
}
