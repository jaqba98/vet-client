import { BaseDomainModel } from '../base/base-domain.model'

export interface OpeningHourDomainModel extends BaseDomainModel {
  mondayFrom: string
  mondayTo: string
  tuesdayFrom: string
  tuesdayTo: string
  wednesdayFrom: string
  wednesdayTo: string
  thursdayFrom: string
  thursdayTo: string
  fridayFrom: string
  fridayTo: string
  saturdayFrom: string
  saturdayTo: string
  sundayFrom: string
  sundayTo: string
  clinicId: number
}
