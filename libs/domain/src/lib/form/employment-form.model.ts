import { ControlInputModel } from '@vet-client/lib-base-form'

export interface EmploymentFormModel {
  id: ControlInputModel
  isOwner: ControlInputModel
  isArchived: ControlInputModel
  accountId: ControlInputModel
  clinicId: ControlInputModel
}
