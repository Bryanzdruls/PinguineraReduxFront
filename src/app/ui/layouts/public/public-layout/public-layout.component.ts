import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContainerComponent } from '../../../../containers/header-container/header-container.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [HeaderContainerComponent,RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent {

}
