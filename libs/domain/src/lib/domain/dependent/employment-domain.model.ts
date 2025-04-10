import { BaseDomainModel } from '../base/base-domain.model'

export interface EmploymentDomainModel extends BaseDomainModel {
  isOwner: boolean
  accountId: number
  clinicId: number
}
