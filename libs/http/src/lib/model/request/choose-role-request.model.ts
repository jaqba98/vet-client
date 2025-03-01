import { BaseRequestModel } from '../base/base-request.model';

export interface ChooseRoleRequestModel extends BaseRequestModel {
  role: string;
}
