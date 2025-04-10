import { ControlType } from '@vet-client/lib-base-form'

export interface AppointmentFormModel {
  id: ControlType
  fullName: ControlType
  dateAndHour: ControlType
  type: ControlType
  status: ControlType
  reason: ControlType
  notes: ControlType
  clinicId: ControlType
  vetId: ControlType
  petId: ControlType
}
