import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IProductModel } from '../../../core/models/product/product.model';
import { IMultiplePriceModel, IProductEntityListResponseModel } from '../../../core/models/product/multiplePrice.model';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { IBudgetRequest, IBudgetResponse } from '../../../core/models/product/productBudget.model';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonApiElementComponent } from '../../elements/products/button-api-element/button-api-element.component';
import { BudgetItemElementComponent } from '../../elements/budget/budget-item-element/budget-item-element.component';
import { BudgetElementComponent } from '../../elements/budget/budget-element/budget-element.component';
import { ProductStoreModel } from '../../../core/models/store/products/products.storemodel';

@Component({
  selector: 'app-budget-block',
  standalone: true,
  imports: [CommonModule,CurrencyPipe,BudgetElementComponent, ReactiveFormsModule,BudgetItemElementComponent, ButtonApiElementComponent],
  templateUrl: './budget-block.component.html',
  styleUrl: './budget-block.component.css'
})
export class BudgetBlockComponent {
  @Input() products: ProductStoreModel[];
  @Input() budgetResponse: IBudgetResponse;

  showModal: boolean;
  applyForm:FormGroup = new FormGroup({
    budget: new FormControl('1000',[
      Validators.required,
      Validators.min(0)
    ])
  })
  closeModal(): void {
    this.showModal=false
  }
  budgetRequest:IBudgetRequest;
  @Output() eventEmmitter = new EventEmitter<IBudgetRequest>();

  hasProductWithQuantity(products: any[]): boolean {
    return products.some(product => product.quantity > 0);
  }

  emit(){
    this.budgetRequest = {
      providerId:"beb6488e-c3a4-46e7-9172-1569d7196099",
      productIds:this.products.filter((item) => item.stock>0).map(item => item.copyId),
      budget:this.applyForm.getRawValue(),
      registrationDate:"2020-03-12"
    }

    this.eventEmmitter.emit(this.budgetRequest);
    this.showModal =true;
  }

  get budget(){
    return this.applyForm.get('budget');
  }

  calcularTotalValor(): number {
    let total: number = 0;
    for (let item of this.budgetResponse.copiesResponse) {
      total += item.finalPrice * item.stock;
    }
    return total;
  }
}
