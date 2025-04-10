import { ControlType } from '@vet-client/lib-base-form'

export interface OpeningHourFormModel {
  id: ControlType
  mondayFrom: ControlType
  mondayTo: ControlType
  tuesdayFrom: ControlType
  tuesdayTo: ControlType
  wednesdayFrom: ControlType
  wednesdayTo: ControlType
  thursdayFrom: ControlType
  thursdayTo: ControlType
  fridayFrom: ControlType
  fridayTo: ControlType
  saturdayFrom: ControlType
  saturdayTo: ControlType
  sundayFrom: ControlType
  sundayTo: ControlType
  clinicId: ControlType
}
