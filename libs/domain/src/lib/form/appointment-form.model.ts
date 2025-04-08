import { ControlInputModel } from '@vet-client/lib-base-form'

export interface AppointmentFormModel {
  id: ControlInputModel
  fullName: ControlInputModel
  isArchived: ControlInputModel
  dateAndHour: ControlInputModel
  type: ControlInputModel
  status: ControlInputModel
  reason: ControlInputModel
  notes: ControlInputModel
  clinicId: ControlInputModel
  vetId: ControlInputModel
  petId: ControlInputModel
  invoiceId: ControlInputModel
  medicalRecordId: ControlInputModel
}
