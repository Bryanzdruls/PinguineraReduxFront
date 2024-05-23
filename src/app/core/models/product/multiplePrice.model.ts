export interface IMultiplePriceModel {
  name: string;
  basePrice: number;
  quantity: number;
  productType: string;
  finalPrice: number;
  discount: {
    DiscountDetalMayor?: number;
    IncrementDetalMayor?: number;
  };
  finalPricePerQuantity: number;
}

export interface IProductEntityListResponseModel {
  productEntityList: IMultiplePriceModel[];
  totalFinalPrice: number;
}
