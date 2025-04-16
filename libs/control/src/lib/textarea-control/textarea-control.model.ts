import { FormGroup } from '@angular/forms'

export interface TextareaControlModel {
  label: string
  placeholder: string
  formGroup?: FormGroup
  controlName: string
  isError: boolean
}
