// done
import { ControlInputModel, ControlButtonModel } from '@vet-client/lib-base-form'

export interface LoginDomainFormModel {
  email: ControlInputModel
  password: ControlInputModel
  login: ControlButtonModel
}

export interface LoginDomainResponseModel {
  isError: boolean
}

export interface LoginDomainDataModel {
  email: string
  password: string
}
