import { BaseDomainModel } from '../base/base-domain.model'

export interface MedicalRecordDomainModel extends BaseDomainModel {
  diagnosis: string
  treatment: string
  procedures: string
  nextAppointment: string
  status: string
  notes: string
  appointmentId: number
}
