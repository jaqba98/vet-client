import { ClientDomainModel, ClientMetadataModel } from '@vet-client/lib-domain'
import { ActionTypeEnum } from '../../../enum/action-type.enum'

import { baseTableFormReducer } from '../../base/base-table-form.reducer'

export const clientTableFormReducer
  = baseTableFormReducer<ClientDomainModel, ClientMetadataModel>(ActionTypeEnum.client)
