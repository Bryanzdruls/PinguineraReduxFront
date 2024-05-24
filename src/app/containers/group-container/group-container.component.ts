import { Component } from '@angular/core';
import { GroupContainerFacade } from './group-container.facade';
import { Observable } from 'rxjs';
import { GroupsBlocksComponent } from '../../ui/blocks/groups-blocks/groups-blocks.component';
import { ProductStoreModel } from '../../core/models/store/products/products.storemodel';
import { AsyncPipe } from '@angular/common';
import { GroupResponse } from '../../core/models/product/group.model';

@Component({
  selector: 'app-group-container',
  standalone: true,
  imports: [GroupsBlocksComponent,AsyncPipe],
  templateUrl: './group-container.component.html',
  styles: ``
})
export class GroupContainerComponent {
  public providerId$: Observable<string>;
  public products$: Observable<ProductStoreModel[]>;
  public groupResponse$: Observable<GroupResponse>;

  constructor(
    private readonly facade:GroupContainerFacade
  ){}

  receiveProducts(payload){
    this.facade.calculateGroups(payload);
  }

  ngOnInit(): void {
    this.facade.getProviderId();
    this.facade.getProducts();
    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    this.providerId$ = this.facade.providerId$();
    this.products$ = this.facade.products$();
    this.groupResponse$ = this.facade.groupResponse$();
  }
}
