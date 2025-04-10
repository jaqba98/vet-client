import { TokenRequestModel } from '../base/token-request.model'

export interface DeleteRequestModel extends TokenRequestModel {
  ids: number[]
}
