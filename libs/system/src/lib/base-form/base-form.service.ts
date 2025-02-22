import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BaseFormModel, ControlType, TControlsArray } from './base-form.model';

@Injectable()
export class BaseFormService {
  createFormGroup<TForm>(baseForm: BaseFormModel<TForm>): FormGroup {
    const formGroup = new FormGroup({});
    Object.entries(baseForm.controls as Record<string, ControlType>).forEach(([key, control]) => {
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

  getControlsArray<TForm>(baseForm: BaseFormModel<TForm>): TControlsArray {
    return Object.entries(baseForm.controls as Record<string, ControlType>)
      .map(([key, value]) => ({ name: key, model: value }));
  }

  private createInputFormControl() {
    return new FormControl('');
  }

  private createButtonFormControl() {
    return new FormControl(false);
  }
}
