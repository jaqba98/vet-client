import { ControlType } from '@vet-client/lib-base-form';
import { RoleDomainEnum } from '@vet-client/lib-domain';

export interface ChooseRoleFormModel {
  role: ControlType;
  save: ControlType;
}

export interface ChooseRoleModel {
  role: RoleDomainEnum;
  save: boolean;
}
