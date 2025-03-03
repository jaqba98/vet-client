import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponentDirective } from '@vet-client/lib-utils';

@Component({
  selector: 'lib-main-view',
  imports: [CommonModule],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class MainViewComponent {}
