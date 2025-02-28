// done
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { TextareaControlModel } from './textarea-control.model';
import { TextControlComponent } from '../text-control/text-control.component';

@Component({
  selector: 'lib-textarea-control',
  imports: [CommonModule, ReactiveFormsModule, TextControlComponent],
  templateUrl: './textarea-control.component.html',
  styleUrl: './textarea-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class TextareaControlComponent {
  @Input({ required: true }) model!: TextareaControlModel;

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlName!: string;

  @Input() isError = false;

  isLabel() {
    return this.model.label !== '';
  }
}
