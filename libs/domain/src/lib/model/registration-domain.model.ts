import { ControlButtonModel, ControlInputModel } from '@vet-client/lib-base-form'

export interface RegistrationDomainFormModel {
  id: ControlInputModel
  email: ControlInputModel
  password: ControlInputModel
  confirmPassword: ControlInputModel
  firstName: ControlInputModel
  lastName: ControlInputModel
  role: ControlInputModel
  pictureUrl: ControlInputModel
  isVerified: ControlInputModel
  register: ControlButtonModel
}

export interface RegistrationDomainResponseModel {
  success: boolean
  message: string
}

export interface RegistrationDomainDataModel {
  id: number
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  role: string
  pictureUrl: string
  isVerified: boolean
}
