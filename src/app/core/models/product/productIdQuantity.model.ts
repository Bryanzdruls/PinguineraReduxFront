export interface IProductIdAndQuantityOnlyModel {
  providerId: string;
  productsIdsQuantity: {
    id: string;
    quantity: number;
  }[],
  registrationDate: String;
}
