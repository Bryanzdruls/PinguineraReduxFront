
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateProductResponse } from '../../../core/models/product/createProductResponse.model';

import { FieldElementComponent } from '../../elements/field-element/field-element.component';
import { ProductStoreModel } from '../../../core/models/store/products/products.storemodel';
import { IProductModelResponse } from '../../../core/models/product/product.model';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [ReactiveFormsModule,FieldElementComponent],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  options: string[] = ['BOOK', 'NOVEL'];
  selectedOption: string;
  @Input() productResponse: IProductModelResponse;
  @Output() formEmitter = new EventEmitter();;

  applyForm= new FormGroup({
    providerId: new FormControl('',Validators.required),
    title: new FormControl('',[
      Validators.required,
    ]),
    author: new FormControl('',[
      Validators.required,
    ]),
    publicationYear: new FormControl('',[
      Validators.required,
      Validators.min(1900),
      Validators.max(2024)
    ]),
    price: new FormControl('',[
      Validators.required,
      Validators.min(0),
      Validators.max(100000)
    ]),

    type: new FormControl('',
      Validators.required
    ),
  })

  onSubmit(){
    switch(this.applyForm.getRawValue() as any){
      case "0":
        this.applyForm.controls['type'].setValue('BOOK');
        break;
      case "1":
        this.applyForm.controls['type'].setValue('NOVEL');
        break;
    }
    const toEmitForm = this.applyForm.getRawValue() as any;
    this.formEmitter.emit(toEmitForm);
  }

  get title() {
    return this.applyForm.get('title');
  }

  get author() {
    return this.applyForm.get('title');
  }

  get publicationYear(){
    return this.applyForm.get('publicationYear');
  }

  get price(){
    return this.applyForm.get('price');
  }

  get type(){
    return this.applyForm.get('type');
  }
}
