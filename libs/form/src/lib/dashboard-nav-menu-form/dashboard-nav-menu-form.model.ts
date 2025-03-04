import { ControlType } from '@vet-client/lib-base-form';

export interface DashboardNavMenuFormModel {
  dashboard: ControlType;
  settings: ControlType;
}

export interface DashboardNavMenuModel {
  dashboard: boolean;
  settings: boolean;
}
