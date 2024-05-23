import { ProductStoreModel } from "../store/products/products.storemodel";

export interface GroupRequest {
  providerId:       string;
  generalGroup:     GeneralGroup[];
  registrationDate: string;
}

export interface GroupResponse {
  groupResponses:        GroupResponseElement[];
  priceTotal:            number;
  discountMayorTotal:    number;
  discountCustomerTotal: number;
  incrementTotal:        number;
}

export interface GroupResponseElement {
  products:                 ProductStoreModel[];
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
