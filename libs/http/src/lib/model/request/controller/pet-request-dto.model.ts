import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

import { PetDomainModel } from '@vet-client/lib-domain'

export interface PetRequestDtoModel extends TokenRequestDtoModel, PetDomainModel {}
