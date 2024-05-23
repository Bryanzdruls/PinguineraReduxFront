import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-button-header-element',
  standalone: true,
  imports: [],
  templateUrl: './add-button-header-element.component.html',
  styleUrl: './add-button-header-element.component.css'
})
export class AddButtonHeaderElementComponent {
  @Output() eventEmmiter = new EventEmitter<void>;
  constructor(
    private readonly router:Router
  ){}

  navigateToCreateProduct(){
    this.router.navigateByUrl(`/product`)
  }
}
