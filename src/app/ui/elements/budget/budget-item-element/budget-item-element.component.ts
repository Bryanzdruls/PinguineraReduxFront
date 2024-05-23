import { Component, Input } from '@angular/core';
import { IProductModel } from '../../../../core/models/product/product.model';
import { ProductStoreModel } from '../../../../core/models/store/products/products.storemodel';


@Component({
  selector: 'app-budget-item-element',
  standalone: true,
  imports: [],
  templateUrl: './budget-item-element.component.html',
  styleUrl: './budget-item-element.component.css'
})
export class BudgetItemElementComponent {
  @Input() item: IProductModel
}
