import { BaseResponseModel } from '../base/base-response.model';

export interface GetAccountResponseModel extends BaseResponseModel {
  firstName: string;
  lastName: string;
}
