import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItemElementComponent } from '../../elements/products/product-item-element/product-item-element.component';
import { MultiplepriceResponseElementComponent } from '../../elements/products/multipleprice-response-element/multipleprice-response-element.component';
import { ButtonApiElementComponent } from '../../elements/products/button-api-element/button-api-element.component';
import { ProductStoreModel } from '../../../core/models/store/products/products.storemodel';
import { GroupRequest, GroupResponse, ProductsIDSQuantity } from '../../../core/models/product/group.model';

@Component({
  selector: 'app-groups-blocks',
  standalone: true,
  imports: [ProductItemElementComponent,MultiplepriceResponseElementComponent,ButtonApiElementComponent],
  templateUrl: './groups-blocks.component.html',
  styleUrl: './groups-blocks.style.css'
})
export class GroupsBlocksComponent {

  @Input() products: ProductStoreModel[];
  @Input() groupResponse: GroupResponse;

  @Output() eventEmmitter = new EventEmitter<GroupRequest>();

  agrupaciones: { productsIdsQuantity: ProductsIDSQuantity[] }[] = [];
  seleccionados: ProductStoreModel[] = [];

  seleccionarElemento(product: ProductStoreModel) {
    if (product.stock > 0 && !this.seleccionados.includes(product)) {
      this.seleccionados.push(product);
    }
  }

  agregarAgrupacion() {
    if (this.seleccionados.length > 0) {
      this.agrupaciones.push({ productsIdsQuantity: [
        ...this.seleccionados.map(product => ({
          id: product.copyId,
          quantity: product.stock
        }))
      ] });
      this.seleccionados.forEach(prod => {
        this.products = this.products.filter(p => p.copyId !== prod.copyId);
      });
      this.seleccionados = [];
    }
  }

  enviarAgrupaciones() {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // getMonth() devuelve un índice basado en 0, por lo que se suma 1
    const dia = fechaActual.getDate();

    // Asegúrate de que el mes y el día sean de dos dígitos
    const mesFormateado = mes < 10 ? `0${mes}` : `${mes}`;
    const diaFormateado = dia < 10 ? `0${dia}` : `${dia}`;

    const fechaFormateada = `${año}-${mesFormateado}-${diaFormateado}`;

    const groupedEmit = {
      providerId: "beb6488e-c3a4-46e7-9172-1569d7196099",
      generalGroup:this.agrupaciones,
      registrationDate: fechaFormateada
    }
    this.eventEmmitter.emit(groupedEmit);
  }

  estaSeleccionado(elemento: ProductStoreModel): boolean {
    return this.seleccionados.includes(elemento);
  }

  estaDeshabilitado(product: ProductStoreModel): boolean {
    return this.seleccionados.includes(product) || product.stock === 0;
  }

  decreaseQuantity(product: any) {
    if (product.stock > 0) {
      product.stock--;
      if (product.stock === 0) {
        this.seleccionarElemento(product);
      }
    }
  }

  increaseQuantity(product: any) {
    product.stock++;
    if (this.seleccionados.includes(product) && product.stock > 0) {
      this.seleccionados = this.seleccionados.filter(p => p.copyId !== product.copyId);
    }
  }
}
