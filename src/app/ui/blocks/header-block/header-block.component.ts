import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AddButtonHeaderElementComponent } from '../../elements/header/add-button-header-element/add-button-header-element.component';
import { CalculateButtonElementComponent } from '../../elements/header/calculate-button-element/calculate-button-element.component';
import { BudgetButtonElementComponent } from '../../elements/header/budget-button-element/budget-button-element.component';
import { GroupButtonElementComponent } from '../../elements/header/group-button-element/group-button-element.component';

@Component({
  selector: 'app-header-block',
  standalone: true,
  imports: [AddButtonHeaderElementComponent,
    CalculateButtonElementComponent,
    BudgetButtonElementComponent,
    GroupButtonElementComponent
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
    this.router.navigateByUrl(`/product`)
  }

  navigateToGetPriceByMultipleProducts(){
    this.router.navigateByUrl(`/products`)
  }

  navigateToGetProductsByBudget(){
    this.router.navigateByUrl(`/budget`)
  }
  navigateToGroups(){
    this.router.navigateByUrl(`/groups`)
  }
}
