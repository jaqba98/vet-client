import { MedicationDomainModel, MedicationMetadataModel } from '@vet-client/lib-domain'
import { BaseTableFormStoreModel } from '../../../model/base/base-table-form-store.model'

export type MedicationTableFormType = {
  medicationTableForm: BaseTableFormStoreModel<MedicationDomainModel, MedicationMetadataModel>
}
