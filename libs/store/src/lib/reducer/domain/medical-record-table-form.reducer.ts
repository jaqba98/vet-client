import { MedicalRecordDomainModel } from '@vet-client/lib-domain'
import { baseTableFormReducer } from '../base/base-table-form.reducer'
import { ActionTypeEnum } from '../../enum/action-type.enum'

export const medicalRecordTableFormReducer = baseTableFormReducer<MedicalRecordDomainModel>(ActionTypeEnum.medicalRecord)
