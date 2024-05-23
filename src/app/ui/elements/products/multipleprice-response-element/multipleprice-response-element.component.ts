import { Component, Input } from '@angular/core';
import { IMultiplePriceModel } from '../../../../core/models/product/multiplePrice.model';


@Component({
  selector: 'app-multipleprice-response-element',
  standalone: true,
  imports: [],
  templateUrl: './multipleprice-response-element.component.html',
  styleUrl: './multipleprice-response-element.component.css'
})
export class MultiplepriceResponseElementComponent {
  @Input() item: IMultiplePriceModel

  redondearNumero(num: number): string {
    return num.toFixed(3);
  }
}
