import { ClinicDomainModel, ClinicMetadataModel } from '@vet-client/lib-domain'
import { BaseTableFormStoreModel } from '../../../model/base/base-table-form-store.model'

export type ClinicTableFormType = {
  clinicTableForm: BaseTableFormStoreModel<ClinicDomainModel, ClinicMetadataModel>
}
