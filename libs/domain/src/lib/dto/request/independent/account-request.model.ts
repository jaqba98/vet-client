import { TokenRequestModel } from '../base/token-request.model'
import { AccountDomainModel } from '../../../domain/independent/account-domain.model'

export interface AccountRequestModel extends TokenRequestModel, AccountDomainModel {}
