import { FormGroup } from '@angular/forms'

export interface SelectOptionModel {
  label: string
  value: string
}

export interface SelectControlModel {
  label: string
  options: SelectOptionModel[]
  formGroup?: FormGroup
  controlName: string
}
