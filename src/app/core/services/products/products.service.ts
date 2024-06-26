import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { ProductStoreModel } from '../../models/store/products/products.storemodel';
import { URL_RESOURCES } from '../../resources/url.resource';
import { HttpService } from '../generals/http.service';
import { IProductModel, IProductModelResponse } from '../../models/product/product.model';
import { ApiToProductMapper } from '../../mappers/api-to-product.mapper';
import { IMultiplePriceModel, IProductEntityListResponseModel } from '../../models/product/multiplePrice.model';
import { IProductIdAndQuantityOnlyModel } from '../../models/product/productIdQuantity.model';
import { IBudgetResponse } from '../../models/product/productBudget.model';
import { GroupResponse } from '../../models/product/group.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToProductMapper
  ) {}

  getProviderId(): Observable<{ providerId: string }> {
    const url = URL_RESOURCES.getProviderId;
    return this.httpService.get(url).pipe(
      map((result) => {
        console.log('Result from HTTP call:', result);
        const mappedResult = this.mapper.mapProvider(result);
        console.log('Mapped result:', mappedResult);
        return mappedResult;
      })
    );
  }

  getAll(): Observable<ProductStoreModel[]> {
    const url = URL_RESOURCES.getproducts;
    return this.httpService
        .post<IProductModel[]>(url, {providerId: 'beb6488e-c3a4-46e7-9172-1569d7196099'})
        .pipe(map((result) => this.mapper.mapArray(result)))
  }

  createProduct(productData):Observable<IProductModelResponse> {
    const productTosave = {...productData, stock:1};
    const url = URL_RESOURCES.createproduct;
    return this.httpService
      .post<IProductModelResponse>(url,productTosave)
      .pipe(map((result) => this.mapper.map(result[0])));
  }

  calculateMultiplePrice(payload){
    const mappedPayload:any = this.mapper.mapToMultipleProductsAndClientTypeDto(payload);
    const url = URL_RESOURCES.calculatemultipleprice;
    return this.httpService
    .post<IProductEntityListResponseModel>(url,mappedPayload)
    .pipe(map((result) => this.mapper.multiplePriceResponse(result)));
  }

  calculateBudget(payload){
    const mappedPayload:any = this.mapper.mapToBudgetRequest(payload);
    const url = URL_RESOURCES.calculatebudget;
    return this.httpService
    .post<IBudgetResponse>(url,mappedPayload)
    .pipe(map((result) => this.mapper.budgetResponse(result)));
  }

  calculateGroup(payload){
    const url = URL_RESOURCES.calculatemultiplepricegrouped;
    return this.httpService
    .post<GroupResponse>(url,payload.groupRequest)
    .pipe(map((result) => this.mapper.groupResponse(result)));
  }
}
