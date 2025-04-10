import { ControlType } from '@vet-client/lib-base-form'

export interface MedicalRecordFormModel {
  id: ControlType
  diagnosis: ControlType
  treatment: ControlType
  procedures: ControlType
  nextAppointment: ControlType
  status: ControlType
  notes: ControlType
  appointmentId: ControlType
}
