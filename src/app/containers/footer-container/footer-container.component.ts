import { Component } from '@angular/core';
import { FooterElementComponent } from '../../ui/elements/footer-element/footer-element.component';

@Component({
  selector: 'app-footer-container',
  standalone: true,
  imports: [FooterElementComponent],
  templateUrl: './footer-container.component.html',
  styleUrl: './footer-container.component.css'
})
export class FooterContainerComponent {

}
