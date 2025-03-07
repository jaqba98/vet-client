import { BaseResponseModel } from '../base/base-response.model'

export interface LoginResponseModel extends BaseResponseModel {
  token: string
}
