import { ProductStoreModel } from "../store/products/products.storemodel";
import { IMultiplePriceModel } from "./multiplePrice.model";

export interface GroupRequest {
  providerId:       string;
  generalGroup:     GeneralGroup[];
  registrationDate: string;
}

export interface GroupResponse {
  generalGroup:        GroupResponseElement[];
  priceTotal:            number;
  discountMayorTotal:    number;
  discountCustomerTotal: number;
  incrementTotal:        number;
}

export interface GroupResponseElement {
  copies:                 IMultiplePriceModel[];
  pricePerGroup:            number;
  discountMayorPerGroup:    number;
  discountCustomerPerGroup: number;
  incrementDetalPerGroup:   number;
}



export interface GeneralGroup {
  productsIdsQuantity: ProductsIDSQuantity[];
}

export interface ProductsIDSQuantity {
  id:       string;
  quantity: number;
}
