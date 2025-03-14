import { ControlInputModel } from '@vet-client/lib-base-form'

export interface ClinicDomainFormModel {
  name: ControlInputModel
}

export interface ClinicDomainResponseModel {
  success: boolean
  message: string
}

export interface ClinicDomainDataInternalModel {
  name: string
}

export interface ClinicDomainDataModel {
  id: number
  isSelected: boolean
  data: ClinicDomainDataInternalModel & {
    id: number
  }
}
