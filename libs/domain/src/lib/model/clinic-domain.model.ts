import { ControlInputModel } from '@vet-client/lib-base-form'

export interface ClinicDomainFormModel {
  name: ControlInputModel
  street: ControlInputModel
  buildingNumber: ControlInputModel
  apartmentNumber: ControlInputModel
  postalCode: ControlInputModel
  city: ControlInputModel
  province: ControlInputModel
  country: ControlInputModel
  email: ControlInputModel
  phoneNumber: ControlInputModel
}

export interface ClinicDomainResponseModel {
  success: boolean
  message: string
}

export interface ClinicDomainDataInternalModel {
  name: string
  street: string
  buildingNumber: string
  apartmentNumber: string
  postalCode: string
  city: string
  province: string
  country: string
  email: string
  phoneNumber: string
}

export interface ClinicDomainDataModel {
  id: number
  isSelected: boolean
  data: ClinicDomainDataInternalModel & {
    id: number
  }
}
