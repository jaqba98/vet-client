import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BaseFormControlModel, BaseFormModel } from './base-form.model';

@Component({
  selector: 'lib-base-form',
  imports: [CommonModule ,ReactiveFormsModule],
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
    console.log(this.formGroup.value);
  }

  private addControls() {
    this.baseForm.controls.forEach(control => this.addControl(control));
  }

  private addControl(control: BaseFormControlModel) {
    const { name } = control;
    this.formGroup.addControl(name, this.createFormControl());
  }

  private createFormControl() {
    return new FormControl('');
  }
}
