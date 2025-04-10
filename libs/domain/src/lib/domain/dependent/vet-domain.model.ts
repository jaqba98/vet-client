import { BaseDomainModel } from '../base/base-domain.model'

export interface VetDomainModel extends BaseDomainModel {
  licenseNumber: string
  licenseIssueDate: string
  licenseExpiryDate: string
  specialization: string
  yearsOfExperience: number
  accountId: number
}
