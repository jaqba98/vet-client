import { ControlButtonModel, ControlInputModel } from '@vet-client/lib-base-form'

export interface ClinicDomainFormModel {
  name: ControlInputModel
}

export interface ClinicDomainCreateFormModel extends ClinicDomainFormModel {
  create: ControlButtonModel
}

export interface ClinicDomainUpdateFormModel extends ClinicDomainFormModel {
  update: ControlButtonModel
}

export interface ClinicDomainResponseModel {
  success: boolean
  error: string
}

export interface ClinicDomainDataModel {
  id: number
  name: string
}
