import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductBlockComponent } from '../../ui/blocks/product-block/product-block.component';
import { IProductModel } from '../../core/models/product/product.model';
import { ProductContainerFacade } from './product-container.facade';
import { Observable } from 'rxjs';
import { CreateProductResponse } from '../../core/models/product/createProductResponse.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [ProductBlockComponent, AsyncPipe],
  templateUrl: './product-container.component.html',
})
export class ProductContainerComponent implements OnInit, OnDestroy{

  public productResponse$: Observable<CreateProductResponse>;

  constructor(
    private readonly facade: ProductContainerFacade
  ){}

  handleProduct(formData:IProductModel){
    this.facade.createProduct(formData);
  }

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    //this.productResponse$ = this.facade.creationProductResult$();
  }
}
