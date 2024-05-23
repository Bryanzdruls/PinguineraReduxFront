import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, mergeMap, of } from "rxjs"
import * as ProductsActions from '../actions/products.actions'
import { ProductService } from "../../services/products/products.service"
import { modifyProduct, calculateBudget } from '../actions/products.actions';


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
  calculateMultiplePrice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.calculateMultiplePrice),
      mergeMap((multiplePriceRequest) =>
        this.productService.calculateMultiplePrice(multiplePriceRequest).pipe(
          map((products) => ProductsActions.calculateMultiplePriceSuccess({ products })),
          catchError((error) => {
            return of(ProductsActions.loadProductsFailed({error}))
          })
        )
      )
    )
  )

  calculateBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.calculateBudget),
      mergeMap((budgetRequest) =>
        this.productService.calculateBudget(budgetRequest).pipe(
          map((budgetResponse) => ProductsActions.calculateBudgetSuccess( {budgetResponse:budgetResponse} )),
          catchError((error) => {
            return of(ProductsActions.calculateBudgetFailure({error}))
          })
        )
      )
    )
  )

  constructor(private readonly actions$: Actions, private readonly productService: ProductService) { }
}
