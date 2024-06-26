import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItemElementComponent } from '../../elements/products/product-item-element/product-item-element.component';
import { MultiplepriceResponseElementComponent } from '../../elements/products/multipleprice-response-element/multipleprice-response-element.component';
import { ButtonApiElementComponent } from '../../elements/products/button-api-element/button-api-element.component';
import { ProductStoreModel } from '../../../core/models/store/products/products.storemodel';
import { GroupRequest, GroupResponse, ProductsIDSQuantity } from '../../../core/models/product/group.model';
import { ModelGroupBlockComponent } from '../model-group-block/model-group-block.component';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-groups-blocks',
  standalone: true,
  imports: [CurrencyPipe,CommonModule,ProductItemElementComponent,MultiplepriceResponseElementComponent,ButtonApiElementComponent, ModelGroupBlockComponent],
  templateUrl: './groups-blocks.component.html',
  styleUrl: './groups-blocks.style.css'
})
export class GroupsBlocksComponent {

  @Input() products: ProductStoreModel[];
  @Input() groupResponse: GroupResponse;

  @Output() eventEmmitter = new EventEmitter<GroupRequest>();

  public showModal: boolean;


  closeModal(): void {
    this.showModal=false
  }

  agrupaciones: { productsIdsQuantity: ProductsIDSQuantity[] }[] = [];
  seleccionados: ProductStoreModel[] = [];

  seleccionarElemento(product: ProductStoreModel) {
    if (product.stock > 0 && !this.seleccionados.includes(product)) {
      this.seleccionados.push(product);
    }
  }

  agregarAgrupacion() {
    const productosConStock = this.products.filter(product => product.stock > 0);
    if (productosConStock.length > 0) {
      this.agrupaciones.push({ productsIdsQuantity: productosConStock.map(product => ({
        id: product.copyId,
        quantity: product.stock
      })) });

      // Poner el stock de los productos añadidos en 0
      productosConStock.forEach(product => product.stock = 0);
    }
  }

  enviarAgrupaciones() {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // getMonth() devuelve un índice basado en 0, por lo que se suma 1
    const dia = fechaActual.getDate();

    const mesFormateado = mes < 10 ? `0${mes}` : `${mes}`;
    const diaFormateado = dia < 10 ? `0${dia}` : `${dia}`;

    const fechaFormateada = `${año}-${mesFormateado}-${diaFormateado}`;

    const groupedEmit = {
      providerId: "beb6488e-c3a4-46e7-9172-1569d7196099",
      generalGroup: this.agrupaciones,
      registrationDate: fechaFormateada
    };
    this.eventEmmitter.emit(groupedEmit);
    this.showModal= true;
    this.agrupaciones= []
    this.seleccionados =[]
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

  hasStockProducts(): boolean {
    return this.products.some(product => product.stock > 0);
  }
}
