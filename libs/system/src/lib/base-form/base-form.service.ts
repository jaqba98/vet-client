import { Inject, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BaseFormModel, ControlType, ControlsArrayType } from './base-form.model';

@Injectable()
export class BaseFormService<TFormModel ,TFormDataModel> {
  formGroup: FormGroup;

  controlsArray: ControlsArrayType;

  constructor(@Inject('baseForm') baseForm: BaseFormModel<TFormModel>) {
    this.formGroup = this.createFormGroup(baseForm);
    this.controlsArray = this.getControlsArray(baseForm);
  }

  createFormGroup(baseForm: BaseFormModel<TFormModel>): FormGroup {
    const formGroup = new FormGroup({});
    Object.entries(baseForm as Record<string, ControlType>).forEach(([key, control]) => {
      switch (control.kind) {
        case 'input':
          formGroup.addControl(key, this.createInputFormControl());
          break;
        case 'button':
          formGroup.addControl(key, this.createButtonFormControl());
          break;
        default:
          throw new Error('Unknown control type!');
      }
    });
    return formGroup;
  }

  getControlsArray(baseForm: BaseFormModel<TFormModel>): ControlsArrayType {
    return Object.entries(baseForm as Record<string, ControlType>)
      .map(([key, value]) => ({ name: key, model: value }));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSubmit(model: TFormDataModel) {
    throw new Error('Unimplemented method name!');
  }

  private createInputFormControl() {
    return new FormControl('');
  }

  private createButtonFormControl() {
    return new FormControl(false);
  }
}
