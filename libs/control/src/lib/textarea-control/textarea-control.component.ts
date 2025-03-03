import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ColorType } from '@vet-client/lib-type';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextControlComponent } from '../text-control/text-control.component';
import { TextareaControlModel } from './textarea-control.model';

@Component({
  selector: 'lib-textarea-control',
  imports: [CommonModule, ReactiveFormsModule, TextControlComponent],
  templateUrl: './textarea-control.component.html',
  styleUrl: './textarea-control.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class TextareaControlComponent {
  @Input({ required: true }) model!: TextareaControlModel;

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
