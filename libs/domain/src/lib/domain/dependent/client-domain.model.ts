import { BaseDomainModel } from '../base/base-domain.model'

export interface ClientDomainModel extends BaseDomainModel {
  email: string
  phoneNumber: string
  firstName: string
  lastName: string
  clinicId: number
}
