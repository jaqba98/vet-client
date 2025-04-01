import { ControlInputModel } from '@vet-client/lib-base-form'

export interface MedicalRecordFormModel {
  id: ControlInputModel
  isArchived: ControlInputModel
  diagnosis: ControlInputModel
  treatment: ControlInputModel
  procedures: ControlInputModel
  nextAppointment: ControlInputModel
  status: ControlInputModel
  notes: ControlInputModel
}
