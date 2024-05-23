import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddButtonHeaderElementComponent } from '../../elements/header/add-button-header-element/add-button-header-element.component';
import { CalculateButtonElementComponent } from '../../elements/header/calculate-button-element/calculate-button-element.component';
import { BudgetButtonElementComponent } from '../../elements/header/budget-button-element/budget-button-element.component';

@Component({
  selector: 'app-header-block',
  standalone: true,
  imports: [AddButtonHeaderElementComponent,
    CalculateButtonElementComponent,
    BudgetButtonElementComponent,
  ],
  templateUrl: './header-block.component.html',
  styleUrl: './header-block.component.css'
})
export class HeaderBlockComponent {
  @Output() eventEmmiter = new EventEmitter<void>;
  constructor(
    private readonly router:Router
  ){}

  navigateToCreateProduct(){
    this.router.navigateByUrl(`api/product`)
  }

  navigateToGetPriceByMultipleProducts(){
    this.router.navigateByUrl(`api/products`)
  }

  navigateToGetProductsByBudget(){
    this.router.navigateByUrl(`api/budget`)
  }
}
