import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputControlComponent, ButtonControlComponent } from '@vet-client/lib-control';
import { TControlsArray } from './base-form.model';

@Component({
  selector: 'lib-base-form',
  imports: [CommonModule, ReactiveFormsModule, InputControlComponent, ButtonControlComponent],
  templateUrl: './base-form.component.html'
})
export class BaseFormComponent {
  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true}) controlsArray!: TControlsArray;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input({ required: true }) onSubmit!: (model: any) => void;

  onBaseSubmit() {
    const rawValue = this.formGroup.getRawValue();
    this.onSubmit(rawValue);
  }
}
