import { ControlType } from '@vet-client/lib-base-form'

export interface DashboardNavMenuFormModel {
  dashboard: ControlType
  accountSettings: ControlType
  profile: ControlType
}

export interface DashboardNavMenuModel {
  dashboard: boolean
  accountSettings: boolean
  profile: boolean
}
