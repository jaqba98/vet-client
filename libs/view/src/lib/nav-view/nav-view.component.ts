import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonControlComponent } from '@vet-client/lib-control';
import { NavViewModel } from './nav-view.model';

@Component({
  selector: 'lib-nav-view',
  imports: [CommonModule, ButtonControlComponent],
  templateUrl: './nav-view.component.html',
  styleUrl: './nav-view.component.scss',
})
export class NavViewComponent {
  @Input({ required: true }) model!: NavViewModel;
}
