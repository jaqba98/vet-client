import { ControlInputModel } from '@vet-client/lib-base-form'

export interface ClinicDomainFormModel {
  name: ControlInputModel
}

export interface ClinicDomainResponseModel {
  success: boolean
  error: string
}

export interface ClinicDomainDataModel {
  id: number
  isSelected: boolean
  data: {
    id: number
    name: string
  }
}
