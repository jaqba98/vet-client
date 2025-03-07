import { ControlType } from '@vet-client/lib-base-form'

export interface BaseLoginRegistrationFormModel {
  login: ControlType
  registration: ControlType
}

export interface BaseLoginRegistrationModel {
  login: boolean
  registration: boolean
}
