import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from '../ui/layouts/public/public-layout/public-layout.component';
import { HeaderContainerComponent } from '../containers/header-container/header-container.component';
import { ProductContainerComponent } from '../containers/product-container/product-container.component';
import { ProductsContainerComponent } from '../containers/products-container/products-container.component';

const routes: Routes = [
  {
    path:'',
    component: PublicLayoutComponent,
    children:[
    {
      path: '',
      component: HeaderContainerComponent,
      outlet:'header'
    },
    {
      path:'product',
      component:ProductContainerComponent,
    },
    {
      path:'products',
      component:ProductsContainerComponent,
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
