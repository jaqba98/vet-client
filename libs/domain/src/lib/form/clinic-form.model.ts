import { ControlInputModel } from '@vet-client/lib-base-form'

export interface ClinicFormModel {
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
