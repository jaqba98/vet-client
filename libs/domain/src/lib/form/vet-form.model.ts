import { ControlInputModel } from '@vet-client/lib-base-form'

export interface VetFormModel {
  id: ControlInputModel
  isArchived: ControlInputModel
  licenseNumber: ControlInputModel
  licenseIssueDate: ControlInputModel
  licenseExpiryDate: ControlInputModel
  specialization: ControlInputModel
  yearsOfExperience: ControlInputModel
  accountId: ControlInputModel
  openingHoursId: ControlInputModel
}
