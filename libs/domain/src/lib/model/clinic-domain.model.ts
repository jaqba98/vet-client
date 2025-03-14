import { ControlInputModel } from '@vet-client/lib-base-form'

export interface ClinicDomainFormModel {
  id: ControlInputModel
  name: ControlInputModel
}

export interface ClinicDomainResponseModel {
  success: boolean
  message: string
}

export interface ClinicDomainDataModel {
  id: number
  isSelected: boolean
  data: {
    id: number
    name: string
  }
}
