import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonControlModel } from './button-control.model';
import { IconControlComponent } from '../icon-control/icon-control.component';

@Component({
  selector: 'lib-button-control',
  imports: [CommonModule, IconControlComponent],
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss'
})
export class ButtonControlComponent {
  @Input({ required: true }) model!: ButtonControlModel;
}
