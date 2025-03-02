import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonControlComponent,
  ErrorControlComponent,
  InputControlComponent,
  RadioButtonControlComponent, SuccessControlComponent,
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
    TextareaControlComponent,
    RadioButtonControlComponent,
    ErrorControlComponent,
    SuccessControlComponent,
  ],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.scss',
  hostDirectives: [BaseComponentDirective],
})
export class BaseFormComponent implements OnInit {
  @Output() resetEvent = new EventEmitter();

  @Output() event = new EventEmitter();

  @Input({ required: true }) formGroup!: FormGroup;

  @Input({ required: true }) controlsArray!: ControlsArrayType;

  @Input() isHorizontal = false;

  @Input() error = '';

  @Input() success = '';

  ngOnInit() {
    this.resetEvent.emit();
  }

  onSubmit() {
    if (this.isBaseFormValid()) {
      const model = this.formGroup.getRawValue();
      this.event.emit(model);
      this.resetBaseForm();
      return;
    }
    this.setBaseFormNotValid();
  }

  onButtonEvent(controlName: string) {
    this.formGroup.controls[controlName].patchValue(true);
  }

  getClassList() {
    return {
      'base-form--horizontal': this.isHorizontal,
    };
  }

  isControlError(controlName: string) {
    const control = this.formGroup.controls[controlName];
    const { touched, invalid } = control;
    return touched && invalid;
  }

  getControlErrorMessage(controlName: string) {
    const control = this.formGroup.controls[controlName];
    if (control.hasError('required')) {
      return 'This field is required!';
    }
    if (control.hasError('maxlength')) {
      return `Minimum length is ${
        control.getError('maxlength').requiredLength
      } characters!`;
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  private isBaseFormValid() {
    return this.formGroup.valid;
  }

  private setBaseFormNotValid() {
    this.controlsArray.forEach((control) => {
      this.formGroup.controls[control.name].markAsUntouched();
    });
    this.formGroup.markAllAsTouched();
  }

  private resetBaseForm() {
    this.controlsArray.forEach((control) => {
      this.formGroup.controls[control.name].patchValue(
        control.model.defaultValue
      );
    });
    this.formGroup.markAsUntouched();
  }
}
