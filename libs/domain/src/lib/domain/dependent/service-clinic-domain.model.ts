import { BaseDomainModel } from '../base/base-domain.model'

export interface ServiceClinicDomainModel extends BaseDomainModel {
  fullName: string
  description: string
  category: string
  durationMinutes: number
  price: number
  isAvailable: boolean
  clinicId: number
}
