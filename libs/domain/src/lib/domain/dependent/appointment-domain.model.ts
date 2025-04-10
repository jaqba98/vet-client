import { BaseDomainModel } from '../base/base-domain.model'

export interface AppointmentDomainModel extends BaseDomainModel {
  fullName: string
  dateAndHour: string
  type: string
  status: string
  reason: string
  notes: string
  clinicId: number
  vetId: number
  petId: boolean
}
