import { ClinicDomainModel } from '@vet-client/lib-domain'
import { baseTableFormReducer } from '../base/base-table-form.reducer'

export const vetClinicTableFormReducer = baseTableFormReducer<ClinicDomainModel>('Vet Clinic')
