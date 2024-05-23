import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from '../../../../core/models/product/product.model';
import { ProductStoreModel } from '../../../../core/models/store/products/products.storemodel';

@Component({
  selector: 'app-button-api-element',
  standalone: true,
  imports: [],
  templateUrl: './button-api-element.component.html',
  styleUrl: './button-api-element.component.css'
})
export class ButtonApiElementComponent {
  @Input() products:ProductStoreModel[];

  hasProductWithQuantity(products: any[]): boolean {
    return products.some(product => product.stock > 0);
  }

  @Output() eventEmmitter = new EventEmitter<ProductStoreModel[]>();

  emit(){
    this.eventEmmitter.emit(this.products);
  }
}
