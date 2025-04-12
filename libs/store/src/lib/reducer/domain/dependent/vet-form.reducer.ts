import { VetDomainModel, VetMetadataModel } from '@vet-client/lib-domain'

import { ActionTypeEnum } from '../../../enum/action-type.enum'
import { baseFormReducer } from '../../base/base-form.reducer'

export const vetFormReducer = baseFormReducer<VetDomainModel, VetMetadataModel>(ActionTypeEnum.vet)
