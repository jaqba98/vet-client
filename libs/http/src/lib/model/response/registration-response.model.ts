import { BaseResponseModel } from '../base/base-response.model';

export interface RegistrationResponseModel extends BaseResponseModel {
  errors: string[];
}
