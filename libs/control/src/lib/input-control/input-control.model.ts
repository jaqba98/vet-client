import { FormGroup } from '@angular/forms'

export interface InputControlModel {
  type: 'text' | 'password' | 'email'
  label: string
  placeholder: string
  formGroup: FormGroup
  controlName: string
  isError: boolean
}
