import { Component, Input } from '@angular/core';

import { ButtonControlModel } from './button-control.model';

@Component({
  selector: 'lib-button-control',
  templateUrl: './button-control.component.html',
  styleUrl: './button-control.component.scss'
})
export class ButtonControlComponent {
  @Input({ required: true }) model!: ButtonControlModel;
}
