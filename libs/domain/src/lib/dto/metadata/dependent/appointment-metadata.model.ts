import { BaseMetadataModel } from '../base/base-metadata.model'

export interface AppointmentMetadataModel {
  clinicId: BaseMetadataModel
  petId: BaseMetadataModel
  vetId: BaseMetadataModel
}
