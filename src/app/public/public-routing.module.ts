import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from '../ui/layouts/public/public-layout/public-layout.component';
import { HeaderContainerComponent } from '../containers/header-container/header-container.component';
import { ProductContainerComponent } from '../containers/product-container/product-container.component';
import { ProductsContainerComponent } from '../containers/products-container/products-container.component';
import { BudgetContainerComponent } from '../containers/budget-container/budget-container.component';
import { GroupContainerComponent } from '../containers/group-container/group-container.component';

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
    {
      path:'budget',
      component:BudgetContainerComponent,
    },
    {
      path:'groups',
      component:GroupContainerComponent,
    },
    {
      path: '**',
      redirectTo: 'product'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
