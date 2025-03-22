import { ControlInputModel, ControlTextareaModel } from '@vet-client/lib-base-form'

export interface ContactFormModel {
  email: ControlInputModel
  subject: ControlInputModel
  message: ControlTextareaModel
}

export interface ContactModel {
  email: string
  subject: string
  message: string
  send: boolean
}
