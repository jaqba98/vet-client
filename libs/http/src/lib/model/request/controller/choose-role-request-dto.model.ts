import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

import { ChooseRoleDomainDataModel } from '@vet-client/lib-domain'

export interface ChooseRoleRequestDtoModel extends TokenRequestDtoModel, ChooseRoleDomainDataModel {}
