import { TokenRequestModel } from '../base/token-request.model'
import { DeleteDomainModel } from '../../../domain/logic/delete-domain.model'

export interface DeleteRequestModel extends TokenRequestModel, DeleteDomainModel {
}
