import { AppointmentDomainModel, AppointmentMetadataModel } from '@vet-client/lib-domain'

import { baseTableFormReducer } from '../../base/base-table-form.reducer'
import { ActionTypeEnum } from '../../../enum/action-type.enum'

export const appointmentTableFormReducer
  = baseTableFormReducer<AppointmentDomainModel, AppointmentMetadataModel>(ActionTypeEnum.appointment)
