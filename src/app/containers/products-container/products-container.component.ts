import { Component, OnDestroy, OnInit } from '@angular/core';

import { ProductsArrayBlockComponent } from '../../ui/blocks/products-array-block/products-array-block.component';
import { IProductModel } from '../../core/models/product/product.model';
import { Observable } from 'rxjs';
import { ProductContainerFacade } from './products-container.facade';
import { AsyncPipe } from '@angular/common';
import { IProductEntityListResponseModel } from '../../core/models/product/multiplePrice.model';
import { ProductStoreModel } from '../../core/models/store/products/products.storemodel';
import { loadProducts } from '../../core/store/actions/products.actions';

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
  }

  ngOnInit(): void {
    this.facade.getProducts();
    this.initializeSubscriptions();
  }


  private initializeSubscriptions(): void {
    this.products$ = this.facade.products$();
    //this.multiplePriceResponse$ = this.facade.multipleProductsResults$();
  }
}
