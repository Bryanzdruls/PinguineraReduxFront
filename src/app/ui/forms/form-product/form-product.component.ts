
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateProductResponse } from '../../../core/models/product/createProductResponse.model';

import { FieldElementComponent } from '../../elements/field-element/field-element.component';

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
  @Input() productResponse: CreateProductResponse;
  @Output() formEmitter = new EventEmitter();;

  applyForm= new FormGroup({
    providerId: new FormGroup('',Validators.required),
    title: new FormControl('',[
      Validators.required,
    ]),
    author: new FormControl('',[
      Validators.required,
    ]),
    publicationyear: new FormControl('',[
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
      case "BOOK":
        this.applyForm.controls['type'].setValue(0 as any);
        break;
      case "NOVEL":
        this.applyForm.controls['type'].setValue(1 as any);
        break;
    }
    this.formEmitter.emit(this.applyForm.getRawValue());
  }

  get title() {
    return this.applyForm.get('title');
  }

  get author() {
    return this.applyForm.get('title');
  }

  get publicationyear(){
    return this.applyForm.get('publicationyear');
  }

  get price(){
    return this.applyForm.get('price');
  }

  get type(){
    return this.applyForm.get('type');
  }
}
