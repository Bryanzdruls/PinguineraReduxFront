import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, of } from "rxjs"
import * as ProductsActions from '../actions/products.actions'
import { ProductService } from "../../services/products/products.service"
@Injectable()
export class ProductsEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        this.productService.getAll().pipe(
          map((products) => ProductsActions.loadProductsSuccess({ products })),
          catchError((error) => {
            return of(ProductsActions.loadProductsFailed({error}))
          })
        )
      )
    )
  )
  /*
  createProduct$ = createEffect(()=>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      mergeMap(()=>
        this.productService.
      )
    )
  )*/


  constructor(private readonly actions$: Actions, private readonly productService: ProductService) { }
}
