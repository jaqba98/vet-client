import { ClientDomainModel } from '../../../domain/dependent/client-domain.model'
import { TokenRequestModel } from '../base/token-request.model'

export interface ClientRequestModel extends TokenRequestModel, ClientDomainModel {}
