import { ControlInputModel } from '@vet-client/lib-base-form'

export interface RegistrationFormModel {
  email: ControlInputModel
  password: ControlInputModel
  confirmPassword: ControlInputModel
  firstName: ControlInputModel
  lastName: ControlInputModel
}
