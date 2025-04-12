import { MedicalRecordDomainModel, MedicalRecordMetadataModel } from '@vet-client/lib-domain'

import { ActionTypeEnum } from '../../../enum/action-type.enum'
import { baseTableFormReducer } from '../../base/base-table-form.reducer'

export const medicalRecordTableFormReducer
  = baseTableFormReducer<MedicalRecordDomainModel, MedicalRecordMetadataModel>(ActionTypeEnum.medicalRecord)
