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

  onSubmit() {
    const rawValue = this.formGroup.getRawValue();
    console.log(rawValue);
  }
}
