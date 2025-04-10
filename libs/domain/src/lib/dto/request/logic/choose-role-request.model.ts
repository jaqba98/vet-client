import { TokenRequestModel } from '../base/token-request.model'

export interface ChooseRoleRequestModel extends TokenRequestModel {
  role: string
}
