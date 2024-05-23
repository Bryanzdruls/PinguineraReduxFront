import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-field-element',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './field-element.component.html',
  styleUrl: './field-element.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldElementComponent),
      multi: true
    }
  ]
})
export class FieldElementComponent implements ControlValueAccessor{
  @Input() formControl:FormControl;
  @Input() typeInput:string;
  @Input() nameField:string;

  public value: string;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
