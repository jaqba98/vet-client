import { ControlType } from '@vet-client/lib-base-form'

export interface RegistrationFormModel {
  email: ControlType
  password: ControlType
  confirmPassword: ControlType
  firstName: ControlType
  lastName: ControlType
}
