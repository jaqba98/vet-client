import { ControlType } from '@vet-client/lib-base-form'

export interface ClientFormModel {
  id: ControlType
  email: ControlType
  phoneNumber: ControlType
  firstName: ControlType
  lastName: ControlType
  clinicId: ControlType
}
