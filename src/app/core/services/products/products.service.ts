import { Injectable } from '@angular/core';
import { Observable, of, delay, map } from 'rxjs';
import { ProductStoreModel } from '../../models/store/products/products.storemodel';
import { URL_RESOURCES } from '../../resources/url.resource';
import { HttpService } from '../generals/http.service';
import { IProductModel } from '../../models/product/product.model';
import { ApiToProductMapper } from '../../mappers/api-to-product.mapper';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private readonly httpService: HttpService,
    private readonly mapper: ApiToProductMapper
  ) {}

  getAll(): Observable<ProductStoreModel[]> {
    const url = URL_RESOURCES.getproducts;
    return this.httpService
        .post<IProductModel[]>(url, {providerId: 'beb6488e-c3a4-46e7-9172-1569d7196099'})
        .pipe(map((result) => this.mapper.mapArray(result)))
  }

  createProduct(productData):Observable<any> {
    const url = URL_RESOURCES.createproduct;
    return this.httpService
      .post<IProductModel>(url,productData)
      .pipe(map((result) => this.mapper.map(result)));
  }
}