import { ControlType } from '@vet-client/lib-base-form'

export interface VetMenuFormModel {
  vetSettings: ControlType
  vetClinic: ControlType
  vetMedicalRecord: ControlType
  vetMedication: ControlType
  vetServices: ControlType
  vetAppointment: ControlType
  vetInvoice: ControlType
  vetPatients: ControlType
}

export interface VetMenuModel {
  vetSettings: boolean
  vetClinic: boolean
  vetMedicalRecord: boolean
  vetMedication: boolean
  vetServices: boolean
  vetAppointment: boolean
  vetInvoice: boolean
  vetPatients: boolean
}
