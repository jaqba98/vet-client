import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  BaseFormModel,
  ControlButtonModel,
  ControlInputModel,
  ControlRadioButtonModel,
  ControlsArrayType,
  ControlTextareaModel,
  ControlType
} from './base-form.model';

@Injectable()
export class BaseFormService<TFormModel, TModel> {
  formGroup!: FormGroup;

  controlsArray!: ControlsArrayType;

  success = '';

  error = '';

  initBaseForm(baseForm: BaseFormModel<TFormModel>) {
    this.formGroup = this.createFormGroup(baseForm);
    this.controlsArray = this.getControlsArray(baseForm);
  }

  resetBaseForm() {
    this.success = '';
    this.error = '';
  }

  createFormGroup(baseForm: BaseFormModel<TFormModel>): FormGroup {
    const formGroup = new FormGroup({});
    Object.entries(baseForm as Record<string, ControlType>)
      .filter(([, control]) => control.isEnabled)
      .forEach(([key, control]) => {
        switch (control.kind) {
          case 'input':
            formGroup.addControl(key, this.createInputFormControl(control));
            break;
          case 'button':
            formGroup.addControl(key, this.createButtonFormControl(control));
            break;
          case 'textarea':
            formGroup.addControl(key, this.createTextareaFormControl(control));
            break;
          case 'radio-button':
            formGroup.addControl(
              key,
              this.createRadioButtonFormControl(control)
            );
            break;
          default:
            throw new Error('Unknown control kind!');
        }
      });
    return formGroup;
  }

  getControlsArray(baseForm: BaseFormModel<TFormModel>): ControlsArrayType {
    return Object.entries(baseForm as Record<string, ControlType>)
      .filter(([, control]) => control.isEnabled)
      .map(([key, value]) => ({ name: key, model: value }));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSubmit(model: TModel) {
    throw new Error('Unimplemented method name!');
  }

  private createInputFormControl(control: ControlInputModel) {
    return new FormControl(control.defaultValue, control.validators);
  }

  private createButtonFormControl(control: ControlButtonModel) {
    return new FormControl(control.defaultValue);
  }

  private createTextareaFormControl(control: ControlTextareaModel) {
    return new FormControl(control.defaultValue, control.validators);
  }

  private createRadioButtonFormControl(control: ControlRadioButtonModel) {
    return new FormControl(control.defaultValue);
  }
}
