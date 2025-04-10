import { BaseDomainModel } from '..//base/base-domain.model'

export interface MedicationDomainModel extends BaseDomainModel {
  fullName: string
  description: string
  manufacturer: string
  dose: string
  quantityInStock: number
  expirationDate: string
  price: number
  isAvailable: boolean
  clinicId: number
}
