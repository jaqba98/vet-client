import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface DeleteRequestDtoModel extends TokenRequestDtoModel {
  ids: number[]
}
