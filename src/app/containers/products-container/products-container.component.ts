import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsArrayBlockComponent } from '../../ui/blocks/products-array-block/products-array-block.component';
import { IProductModel } from '../../core/models/product/product.model';
import { Observable } from 'rxjs';
import { ProductContainerFacade } from './products-container.facade';
import { AsyncPipe } from '@angular/common';
import { IProductEntityListResponseModel } from '../../core/models/product/multiplePrice.model';
import { ProductStoreModel } from '../../core/models/store/products/products.storemodel';
import { loadProducts, calculateMultiplePrice } from '../../core/store/actions/products.actions';
import { IProductIdAndQuantityOnlyModel } from '../../core/models/product/productIdQuantity.model';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [ProductsArrayBlockComponent,AsyncPipe],
  templateUrl: './products-container.component.html',
})
export class ProductsContainerComponent implements OnInit{
  public products$: Observable<ProductStoreModel[]>;
  public multiplePriceResponse$: Observable<IProductEntityListResponseModel>;

  constructor(
    private readonly facade: ProductContainerFacade
  ){}

  receiveProducts(payload:ProductStoreModel[]){
    const productsIdsAndQuantity = payload.map(product => ({
       id: product.copyId,
       quantity: product.stock -1
    }))

    const calculateMultiplePriceRequest:IProductIdAndQuantityOnlyModel ={
      providerId:'beb6488e-c3a4-46e7-9172-1569d7196099',
      productsIdsQuantity:productsIdsAndQuantity,
      registrationDate: "2020-03-12"
    }

    this.facade.calculateMultiplePrice(calculateMultiplePriceRequest);
  }

  ngOnInit(): void {
    this.facade.getProducts();
    this.initializeSubscriptions();
  }


  private initializeSubscriptions(): void {
    this.products$ = this.facade.products$();
    this.multiplePriceResponse$ = this.facade.calculateMultiplePriceResponse$();
  }
}
