import { ControlType } from '@vet-client/lib-base-form';

export interface ChooseRoleFormModel {
  role: ControlType;
  save: ControlType;
}

export interface ChooseRoleFormDataModel {
  role: string;
  save: boolean;
}
