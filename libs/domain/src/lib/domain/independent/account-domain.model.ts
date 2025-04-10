import { BaseDomainModel } from '../base/base-domain.model'

export interface AccountDomainModel extends BaseDomainModel {
  email: string
  password: string
  firstName: string
  lastName: string
  role: string
  pictureUrl: string
}
