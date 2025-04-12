import { OpeningHourDomainModel, OpeningHourMetadataModel } from '@vet-client/lib-domain'

import { ActionTypeEnum } from '../../../enum/action-type.enum'
import { baseTableFormReducer } from '../../base/base-table-form.reducer'

export const openingHourTableFormReducer
  = baseTableFormReducer<OpeningHourDomainModel, OpeningHourMetadataModel>(ActionTypeEnum.openingHour)
