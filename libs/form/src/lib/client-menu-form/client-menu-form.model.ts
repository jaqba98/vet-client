import { ControlButtonModel } from '@vet-client/lib-base-form'

export interface ClientMenuFormModel {
  clientSettings: ControlButtonModel
  clientPets: ControlButtonModel
  clientAppointment: ControlButtonModel
  clientInvoice: ControlButtonModel
  clientMedicalRecord: ControlButtonModel
  clientClinics: ControlButtonModel
}

export interface ClientMenuModel {
  clientSettings: boolean
  clientPets: boolean
  clientAppointment: boolean
  clientInvoice: boolean
  clientMedicalRecord: boolean
  clientClinics: boolean
}
