import { ControlType } from '@vet-client/lib-base-form'

export interface ClientMenuFormModel {
  clientSettings: ControlType
  clientPets: ControlType
  clientAppointment: ControlType
  clientInvoice: ControlType
  clientMedicalRecord: ControlType
  clientClinics: ControlType
}

export interface ClientMenuModel {
  clientSettings: boolean
  clientPets: boolean
  clientAppointment: boolean
  clientInvoice: boolean
  clientMedicalRecord: boolean
  clientClinics: boolean
}
