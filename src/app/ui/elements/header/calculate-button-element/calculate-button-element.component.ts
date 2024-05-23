import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate-button-element',
  standalone: true,
  imports: [],
  templateUrl: './calculate-button-element.component.html',
  styleUrl: './calculate-button-element.component.css'
})
export class CalculateButtonElementComponent {
  @Output() eventEmmiter = new EventEmitter<void>;
  constructor(
    private readonly router:Router
  ){}

  navigateToGetPriceByMultipleProducts(){
    this.router.navigateByUrl(`/products`)
  }
}
