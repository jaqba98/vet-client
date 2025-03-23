import { ClinicDomainModel } from '@vet-client/lib-domain'
import { baseTableFormReducer } from '../base/base-table-form.reducer'

export const clinicTableFormReducer = baseTableFormReducer<ClinicDomainModel>()
