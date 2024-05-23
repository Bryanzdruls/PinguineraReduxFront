import { Component, OnInit } from '@angular/core';
import { BudgetBlockComponent } from '../../ui/blocks/budget-block/budget-block.component';
import { IProductModel } from '../../core/models/product/product.model';
import { ProductContainerFacade } from '../product-container/product-container.facade';
import { Observable } from 'rxjs';
import { BudgetContainerFacade } from './budget-container.facade';
import { IMultiplePriceModel, IProductEntityListResponseModel } from '../../core/models/product/multiplePrice.model';
import { AsyncPipe } from '@angular/common';
import { IBudgetRequest, IBudgetResponse } from '../../core/models/product/productBudget.model';
import { ProductStoreModel } from '../../core/models/store/products/products.storemodel';

@Component({
  selector: 'app-budget-container',
  standalone: true,
  imports: [BudgetBlockComponent, AsyncPipe],
  templateUrl: './budget-container.component.html',
})
export class BudgetContainerComponent implements OnInit{
  public products$: Observable<IProductModel[]>;
  public budgetResponse$: Observable<IBudgetResponse>

  constructor(
    private readonly facade: BudgetContainerFacade
  ){}

  receiveProducts(payload:IBudgetRequest){
    this.facade.calculateBudget(payload);
  }

  ngOnInit(): void {
    this.facade.getProducts();
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.products$ = this.facade.products$();
    this.budgetResponse$ = this.facade.budgetResponse$();
  }
}
