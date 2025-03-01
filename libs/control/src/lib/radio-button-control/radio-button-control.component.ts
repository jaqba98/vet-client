import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BaseComponentDirective } from '@vet-client/lib-utils';
import { RadioButtonControlModel } from './radio-button-control.model';
import { TextControlComponent } from '../text-control/text-control.component';

@Component({
  selector: 'lib-radio-button-control',
  imports: [CommonModule, TextControlComponent, ReactiveFormsModule],
  templateUrl: './radio-button-control.component.html',
  styleUrl: './radio-button-control.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class RadioButtonControlComponent {
  @Input({ required: true }) model!: RadioButtonControlModel;

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlName!: string;
}
