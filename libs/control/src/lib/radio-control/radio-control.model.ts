import { FormGroup } from '@angular/forms'

export interface RadioOptionModel {
  label: string
  value: string
}

export interface RadioControlModel {
  name: string
  options: RadioOptionModel[]
  formGroup?: FormGroup
  controlName: string
}
