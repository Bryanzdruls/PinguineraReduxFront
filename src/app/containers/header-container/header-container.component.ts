import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderBlockComponent } from '../../ui/blocks/header-block/header-block.component';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderBlockComponent],
  templateUrl: './header-container.component.html',
})
export class HeaderContainerComponent {


}
