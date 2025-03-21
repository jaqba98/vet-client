import { Inject, Injectable } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Subscription } from 'rxjs'

import { ResponseNotification } from '@vet-client/lib-utils'
import { BaseFormModel, ControlsType, ControlType } from './base-form.model'

@Injectable()
export class BaseFormService<TFormModel, TDomainModel> {
  protected readonly sub: Subscription

  formGroup!: FormGroup

  controlsArray!: ControlsType

  title = ''

  success = ''

  error = ''

  constructor(
    @Inject('title') title = '',
    @Inject('response') response?: ResponseNotification,
  ) {
    this.sub = new Subscription()
    this.title = title
    if (response) {
      this.sub.add(response.response$.subscribe((res) => {
        this.success = ''
        this.error = ''
        if (res.success) {
          this.success = res.message
        }
        else {
          this.error = res.message
        }
      }))
    }
  }

  initBaseForm(baseForm: BaseFormModel<TFormModel>) {
    this.formGroup = this.createFormGroup(baseForm)
    this.controlsArray = this.getControlsArray(baseForm)
  }

  onDestroy() {
    this.sub.unsubscribe()
  }

  resetBaseForm() {
    this.success = ''
    this.error = ''
  }

  createFormGroup(baseForm: BaseFormModel<TFormModel>): FormGroup {
    const formGroup = new FormGroup({})
    Object.entries(baseForm as Record<string, ControlType>)
      .forEach(([key, control]) => {
        switch (control.kind) {
          case 'input':
          case 'button':
          case 'textarea':
          case 'radio-button':
            formGroup.addControl(key, new FormControl(control.defaultValue, control.validators))
            break
          default:
            throw new Error('Unknown control kind!')
        }
      })
    return formGroup
  }

  getControlsArray(baseForm: BaseFormModel<TFormModel>): ControlsType {
    return Object.entries(baseForm as Record<string, ControlType>)
      .map(([key, value]) => ({ name: key, model: value }))
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSubmit(domain: TDomainModel) {
    throw new Error('Unimplemented method name!')
  }
}
