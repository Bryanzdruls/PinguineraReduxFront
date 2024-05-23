import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-button-element',
  standalone: true,
  imports: [],
  templateUrl: './budget-button-element.component.html',
  styleUrl: './budget-button-element.component.css'
})
export class BudgetButtonElementComponent {
  @Output() eventEmmiter = new EventEmitter<void>;
  constructor(
    private readonly router:Router
  ){}

  navigateToGetProductsByBudget(){
    this.router.navigateByUrl(`/budget`)
  }
}
