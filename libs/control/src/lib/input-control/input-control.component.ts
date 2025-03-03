import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ColorType } from '@vet-client/lib-type';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextControlComponent } from '../text-control/text-control.component';
import { InputControlModel } from './input-control.model';

@Component({
  selector: 'lib-input-control',
  imports: [CommonModule, ReactiveFormsModule, TextControlComponent],
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class InputControlComponent {
  @Input({ required: true }) model!: InputControlModel;

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlName!: string;

  @Input() isError = false;

  isLabel() {
    return this.model.label !== '';
  }

  getLabelColor(): ColorType {
    return this.isError ? 'error' : 'dark-secondary';
  }
}
