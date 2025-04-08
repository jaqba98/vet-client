import { ControlInputModel } from '@vet-client/lib-base-form'

export interface InvoiceFormModel {
  id: ControlInputModel
  isArchived: ControlInputModel
  invoiceDate: ControlInputModel
  dueDate: ControlInputModel
  totalAmount: ControlInputModel
  amountPaid: ControlInputModel
  outstandingAmount: ControlInputModel
  paymentStatus: ControlInputModel
  paymentMethod: ControlInputModel
  notes: ControlInputModel
  appointmentId: ControlInputModel
}
