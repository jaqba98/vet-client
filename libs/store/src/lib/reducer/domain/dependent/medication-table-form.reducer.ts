import { MedicationDomainModel, MedicationMetadataModel } from '@vet-client/lib-domain'

import { baseTableFormReducer } from '../../base/base-table-form.reducer'
import { ActionTypeEnum } from '../../../enum/action-type.enum'

export const medicationTableFormReducer
  = baseTableFormReducer<MedicationDomainModel, MedicationMetadataModel>(ActionTypeEnum.medication)
