import { BaseMetadataModel } from '../base/base-metadata.model'

export interface EmploymentMetadataModel {
  accountId: BaseMetadataModel
  clinicId: BaseMetadataModel
  myClinicIds: number[]
}
