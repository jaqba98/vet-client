import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputControlComponent, ButtonControlComponent } from '@vet-client/lib-control';
import { BaseFormModel, ControlKindEnum, ControlType } from './base-form.model';

@Component({
  selector: 'lib-base-form',
  imports: [CommonModule, ReactiveFormsModule, InputControlComponent, ButtonControlComponent],
  templateUrl: './base-form.component.html'
})
export class BaseFormComponent implements OnInit {
  @Input({ required: true }) baseForm!: BaseFormModel;

  private readonly formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({});
  }

  ngOnInit() {
    this.addControls();
  }

  onSubmit() {
    const model = this.formGroup.getRawValue();
    this.baseForm.onSubmit(model);
  }

  getFormGroup() {
    return this.formGroup;
  }

  private addControls() {
    this.baseForm.controls.forEach(control => this.addControl(control));
  }

  private addControl(control: ControlType) {
    switch (control.kind) {
      case ControlKindEnum.input:
        this.formGroup.addControl(control.name, new FormControl(control.defaultValue));
        break;
      case ControlKindEnum.button:
        this.formGroup.addControl(control.name, new FormControl(control.defaultValue));
        break;
      default:
        throw new Error(`The control kind is not supported.`);
    }
  }
}
