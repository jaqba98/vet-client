import { RoleDomainEnum } from '@vet-client/lib-domain';
import { BaseRequestModel } from '../base/base-request.model';

export interface ChooseRoleRequestModel extends BaseRequestModel {
  role: RoleDomainEnum;
}
