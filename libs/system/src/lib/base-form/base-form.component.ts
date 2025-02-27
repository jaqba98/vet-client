// done
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonControlComponent, InputControlComponent } from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ControlsArrayType } from './base-form.model';

@Component({
  selector: 'lib-base-form',
  imports: [CommonModule, ReactiveFormsModule, InputControlComponent, ButtonControlComponent],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.scss',
  hostDirectives: [BaseComponentDirective]
})
export class BaseFormComponent {
  @Output() event = new EventEmitter();

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true}) controlsArray!: ControlsArrayType;

  @Input() horizontal = false;

  onSubmit() {
    const model = this.formGroup.getRawValue();
    this.resetFormGroup();
    this.event.emit(model);
  }

  onButtonEvent(control: string) {
    this.formGroup.setControl(control, new FormControl(true));
  }

  getClassList() {
    return {
      'base-form__horizontal': this.horizontal
    };
  }

  private resetFormGroup() {
    this.controlsArray.forEach((control) => {
      this.formGroup.setControl(control.name, new FormControl(control.model.defaultValue));
    })
  }
}
