import { OpeningHourDomainModel, OpeningHourMetadataModel } from '@vet-client/lib-domain'
import { BaseTableFormStoreModel } from '../../../model/base/base-table-form-store.model'

export type OpeningHourTableFormType = {
  clinicOpeningHoursTableForm: BaseTableFormStoreModel<OpeningHourDomainModel, OpeningHourMetadataModel>
}
