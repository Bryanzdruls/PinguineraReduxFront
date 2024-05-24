import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GroupResponse } from '../../../core/models/product/group.model';

@Component({
  selector: 'app-model-group-block',
  standalone: true,
  imports: [],
  templateUrl: './model-group-block.component.html',
  styleUrl: './model-group-block.component.css'
})
export class ModelGroupBlockComponent {
  @Input() groupResponse:GroupResponse;
  @Input() showModal: boolean;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  closeModalTab(): void {
    this.closeModal.emit();
  }
}

