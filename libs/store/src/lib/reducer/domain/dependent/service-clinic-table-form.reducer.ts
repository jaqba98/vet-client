import { ServiceClinicDomainModel, ServiceClinicMetadataModel } from '@vet-client/lib-domain'

import { baseTableFormReducer } from '../../base/base-table-form.reducer'
import { ActionTypeEnum } from '../../../enum/action-type.enum'

export const serviceClinicTableFormReducer
  = baseTableFormReducer<ServiceClinicDomainModel, ServiceClinicMetadataModel>(ActionTypeEnum.serviceClinic)
