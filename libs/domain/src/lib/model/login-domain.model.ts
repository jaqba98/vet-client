// done
import { ControlButtonModel, ControlInputModel } from '@vet-client/lib-base-form'

export interface LoginDomainFormModel {
  email: ControlInputModel
  password: ControlInputModel
  login: ControlButtonModel
}

export interface LoginDomainDataModel {
  email: string
  password: string
}
