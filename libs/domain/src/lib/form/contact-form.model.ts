import { ControlInputModel, ControlTextareaModel } from '@vet-client/lib-base-form'

export interface ContactFormModel {
  email: ControlInputModel
  subject: ControlInputModel
  message: ControlTextareaModel
}
