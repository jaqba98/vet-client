import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputControlComponent, ButtonControlComponent } from '@vet-client/lib-control';
import { ControlsArrayType } from './base-form.model';

@Component({
  selector: 'lib-base-form',
  imports: [CommonModule, ReactiveFormsModule, InputControlComponent, ButtonControlComponent],
  templateUrl: './base-form.component.html'
})
export class BaseFormComponent {
  @Output() event = new EventEmitter();

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true}) controlsArray!: ControlsArrayType;

  onSubmit() {
    const model = this.formGroup.getRawValue();
    this.event.emit(model);
  }
}
