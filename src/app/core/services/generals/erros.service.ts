import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrosService {
  extract(error:HttpErrorResponse): HttpErrorResponse{
    alert('Error en autenticacion')

    return {
      error
    } as HttpErrorResponse
  }
}
