import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import {
  ButtonControlComponent,
  ErrorControlComponent,
  InputControlComponent,
  RadioButtonControlComponent,
  SuccessControlComponent,
  TextareaControlComponent,
} from '@vet-client/lib-control'
import { BaseComponentDirective } from '@vet-client/lib-utils'
import { ControlButtonModel, ControlsType, ControlType } from './base-form.model'
import { BaseFormBuilder } from './base-form.builder'

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
  @Output() resetEvent = new EventEmitter()

  @Output() dataEvent = new EventEmitter()

  @Input({ required: true }) formGroup!: FormGroup
  @Input({ required: true }) controls!: ControlsType
  @Input() resetForm = true
  @Input() isSubmit = true
  @Input() submitText = 'Submit'
  @Input() isHorizontal = false
  @Input() error = ''
  @Input() success = ''

  submit!: ControlButtonModel

  constructor(private baseForm: BaseFormBuilder) {
  }

  ngOnInit() {
    this.submit = this.baseForm.buildButton('submit', this.submitText, 'primary').build()
    this.resetEvent.emit()
  }

  onSubmit() {
    if (this.isBaseFormValid()) {
      const model = this.formGroup.getRawValue()
      this.dataEvent.emit(model)
      if (this.resetForm) this.resetBaseForm()
      return
    }
    this.setBaseFormNotValid()
  }

  onButtonEvent(controlName: string) {
    this.formGroup.controls[controlName].patchValue(true)
  }

  getClassList() {
    return {
      'base-form--horizontal': this.isHorizontal,
    }
  }

  isControlError(controlName: string) {
    const control = this.formGroup.controls[controlName]
    const { touched, invalid } = control
    return touched && invalid
  }

  getControlErrorMessage(controlName: string) {
    const control = this.formGroup.controls[controlName]
    if (control.hasError('required')) {
      return 'This field is required!'
    }
    if (control.hasError('maxlength')) {
      return `Maximum length is ${control.getError('maxlength').requiredLength} characters!`
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address'
    }
    return ''
  }

  private isBaseFormValid() {
    return this.formGroup.valid
  }

  private setBaseFormNotValid() {
    this.controls.forEach((control) => {
      this.formGroup.controls[control.name].markAsUntouched()
    })
    this.formGroup.markAllAsTouched()
  }

  private resetBaseForm() {
    this.controls.forEach((control) => {
      this.formGroup.controls[control.name].patchValue(
        control.model.defaultValue,
      )
    })
    this.formGroup.markAsUntouched()
  }
}
