// done
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonControlComponent,
  ErrorControlComponent,
  InputControlComponent, RadioButtonControlComponent,
  TextareaControlComponent
} from '@vet-client/lib-control';
import { BaseComponentDirective } from '@vet-client/lib-utils';
import { ControlsArrayType } from './base-form.model';

@Component({
  selector: 'lib-base-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputControlComponent,
    ButtonControlComponent,
    ErrorControlComponent,
    TextareaControlComponent,
    RadioButtonControlComponent,
  ],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class BaseFormComponent {
  @Output() event = new EventEmitter();

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlsArray!: ControlsArrayType;

  @Input() horizontal = false;

  isFormValid = false;

  onSubmit() {
    const model = this.formGroup.getRawValue();
    this.isFormValid = this.formGroup.valid;
    if (this.isFormValid) {
      this.resetFormGroup();
      this.event.emit(model);
    } else {
      this.setFormNotValid();
    }
  }

  onButtonEvent(control: string) {
    this.formGroup.setControl(control, new FormControl(true));
  }

  getClassList() {
    return {
      'base-form--horizontal': this.horizontal,
    };
  }

  isControlError(controlName: string) {
    const control = this.formGroup.controls[controlName];
    return control.invalid && control.touched;
  }

  getErrorMessage(controlName: string): string {
    const control = this.formGroup.controls[controlName];
    if (control.hasError('required')) {
      return 'This field is required!';
    }
    if (control.hasError('maxlength')) {
      return `Minimum length is ${
        control.getError('maxlength').requiredLength
      } characters`;
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  private resetFormGroup() {
    this.controlsArray.forEach((control) => {
      this.formGroup.controls[control.name].patchValue(
        control.model.defaultValue
      );
    });
    this.formGroup.markAsUntouched();
  }

  private setFormNotValid() {
    this.controlsArray.forEach((control) => {
      this.formGroup.controls[control.name].markAsTouched();
    });
  }
}
