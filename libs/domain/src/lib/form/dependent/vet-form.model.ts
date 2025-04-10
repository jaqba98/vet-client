import { ControlType } from '@vet-client/lib-base-form'

export interface VetFormModel {
  id: ControlType
  licenseNumber: ControlType
  licenseIssueDate: ControlType
  licenseExpiryDate: ControlType
  specialization: ControlType
  yearsOfExperience: ControlType
  accountId: ControlType
}
