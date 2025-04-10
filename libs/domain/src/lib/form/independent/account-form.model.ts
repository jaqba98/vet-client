import { ControlType } from '@vet-client/lib-base-form'

export interface AccountFormModel {
  id: ControlType
  email: ControlType
  password: ControlType
  firstName: ControlType
  lastName: ControlType
  role: ControlType
  pictureUrl: ControlType
}
