import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputControlModel } from './input-control.model';

@Component({
  selector: 'lib-input-control',
  imports: [ReactiveFormsModule],
  templateUrl: './input-control.component.html'
})
export class InputControlComponent {
  @Input({ required: true }) model!: InputControlModel;

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlName!: string;
}
