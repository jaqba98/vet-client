import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonControlComponent, InputControlComponent } from '@vet-client/lib-control';
import { BaseFormModel, ControlInputModel, ControlKindEnum, ControlType } from './base-form.model';

@Component({
  selector: 'lib-base-form',
  imports: [CommonModule, ReactiveFormsModule, InputControlComponent, ButtonControlComponent],
  templateUrl: './base-form.component.html'
})
export class BaseFormComponent implements OnInit {
  @Input({ required: true }) baseForm!: BaseFormModel;

  readonly formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    this.addControls();
  }

  onSubmit() {
    this.baseForm.onSubmit(this.formGroup);
  }

  private addControls() {
    this.baseForm.controls.forEach(control => this.addControl(control));
  }

  private addControl(control: ControlType) {
    switch (control.kind) {
      case ControlKindEnum.input:
        this.formGroup.addControl(control.name, this.createInputFormControl(control));
        break;
      case ControlKindEnum.button:
        this.formGroup.addControl(control.name, this.createButtonFormControl());
        break;
      default:
        throw new Error(`The control kind is not supported.`);
    }
  }

  private createInputFormControl(input: ControlInputModel) {
    return new FormControl(input.defaultValue);
  }

  private createButtonFormControl() {
    return new FormControl();
  }
}
