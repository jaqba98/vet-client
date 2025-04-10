import { BaseDomainModel } from '../base/base-domain.model'

export interface ClinicDomainModel extends BaseDomainModel {
  fullName: string
  street: string
  buildingNumber: string
  apartmentNumber: string
  postalCode: string
  city: string
  province: string
  country: string
  email: string
  phoneNumber: string
}
