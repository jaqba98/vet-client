import { ClinicDomainModel, ClinicMetadataModel } from '@vet-client/lib-domain'

import { baseTableFormReducer } from '../../base/base-table-form.reducer'
import { ActionTypeEnum } from '../../../enum/action-type.enum'

export const clinicTableFormReducer
  = baseTableFormReducer<ClinicDomainModel, ClinicMetadataModel>(ActionTypeEnum.clinic)
