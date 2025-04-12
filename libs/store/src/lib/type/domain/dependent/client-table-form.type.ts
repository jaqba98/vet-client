import { ClientDomainModel, ClientMetadataModel } from '@vet-client/lib-domain'
import { BaseTableFormStoreModel } from '../../../model/base/base-table-form-store.model'

export type ClientTableFormType = {
  clientTableForm: BaseTableFormStoreModel<ClientDomainModel, ClientMetadataModel>
}
