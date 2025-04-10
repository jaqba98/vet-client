import { ControlType } from '@vet-client/lib-base-form'

export interface ClinicFormModel {
  id: ControlType
  fullName: ControlType
  street: ControlType
  buildingNumber: ControlType
  apartmentNumber: ControlType
  postalCode: ControlType
  city: ControlType
  province: ControlType
  country: ControlType
  email: ControlType
  phoneNumber: ControlType
}
