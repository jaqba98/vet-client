import { ControlInputModel, ControlButtonModel } from '@vet-client/lib-base-form'

export interface LoginDomainFormModel {
  email: ControlInputModel
  password: ControlInputModel
  login: ControlButtonModel
}

export interface LoginDomainResponseModel {
  success: boolean
  message: string
}

export interface LoginDomainDataModel {
  email: string
  password: string
}
