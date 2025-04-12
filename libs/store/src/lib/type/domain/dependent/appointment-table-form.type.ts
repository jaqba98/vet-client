import { AppointmentDomainModel, AppointmentMetadataModel } from '@vet-client/lib-domain'
import { BaseTableFormStoreModel } from '../../../model/base/base-table-form-store.model'

export type AppointmentTableFormType = {
  appointmentTableForm: BaseTableFormStoreModel<AppointmentDomainModel, AppointmentMetadataModel>
}
