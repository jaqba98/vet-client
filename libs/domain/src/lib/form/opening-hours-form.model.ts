import { ControlInputModel } from '@vet-client/lib-base-form'

export interface OpeningHoursFormModel {
  id: ControlInputModel
  mondayFrom: ControlInputModel
  mondayTo: ControlInputModel
  tuesdayFrom: ControlInputModel
  tuesdayTo: ControlInputModel
  wednesdayFrom: ControlInputModel
  wednesdayTo: ControlInputModel
  thursdayFrom: ControlInputModel
  thursdayTo: ControlInputModel
  fridayFrom: ControlInputModel
  fridayTo: ControlInputModel
  saturdayFrom: ControlInputModel
  saturdayTo: ControlInputModel
  sundayFrom: ControlInputModel
  sundayTo: ControlInputModel
  clinicId: ControlInputModel
}
