import { ControlType } from '@vet-client/lib-system';

export interface ChooseRoleFormModel {
  role: ControlType;
  save: ControlType;
}

export interface ChooseRoleFormDataModel {
  role: string;
  save: boolean;
}
