import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-button-element',
  standalone: true,
  imports: [],
  templateUrl: './group-button-element.component.html',
  styleUrl: './group-button-element.component.css'
})
export class GroupButtonElementComponent {
  @Output() eventEmmiter = new EventEmitter<void>;
  constructor(
    private readonly router:Router
  ){}

  navigateToGetPriceByMultipleProducts(){
    this.router.navigateByUrl(`/groups`)
  }
}
