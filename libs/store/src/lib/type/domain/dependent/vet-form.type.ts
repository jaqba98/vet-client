import { VetDomainModel, VetMetadataModel } from '@vet-client/lib-domain'
import { BaseTableFormStoreModel } from '../../../model/base/base-table-form-store.model'

export type VetFormType = {
  vetForm: BaseTableFormStoreModel<VetDomainModel, VetMetadataModel>
}
