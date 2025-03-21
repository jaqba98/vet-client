import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

import { ChooseRoleDomainModel } from '@vet-client/lib-domain'

export interface ChooseRoleRequestDtoModel extends TokenRequestDtoModel, ChooseRoleDomainModel {}
