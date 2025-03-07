import { RoleDomainEnum } from '@vet-client/lib-domain'
import { BaseResponseModel } from '../base/base-response.model'

export interface ChooseRoleResponseModel extends BaseResponseModel {
  role: RoleDomainEnum
}
