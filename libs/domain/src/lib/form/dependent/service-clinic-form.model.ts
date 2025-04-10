import { ControlType } from '@vet-client/lib-base-form'

export interface ServiceClinicFormModel {
  id: ControlType
  fullName: ControlType
  description: ControlType
  category: ControlType
  durationMinutes: ControlType
  price: ControlType
  isAvailable: ControlType
  clinicId: ControlType
}
