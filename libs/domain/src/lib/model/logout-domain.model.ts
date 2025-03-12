// done
import { ControlButtonModel } from '@vet-client/lib-base-form'

export interface LogoutDomainFormModel {
  logout: ControlButtonModel
}

export interface LogoutDomainResponseModel {
  success: boolean
}

export interface LogoutDomainDataModel {
  logout: boolean
}
