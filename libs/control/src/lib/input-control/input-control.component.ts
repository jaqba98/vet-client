import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { InputControlModel } from './input-control.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lib-input-control',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class InputControlComponent {
  @Input({ required: true }) model!: InputControlModel;

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlName!: string;

  isLabel() {
    return this.model.label !== '';
  }
}
