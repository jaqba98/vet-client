import { ControlType } from '@vet-client/lib-base-form'

export interface InvoiceFormModel {
  id: ControlType
  invoiceDate: ControlType
  dueDate: ControlType
  totalAmount: ControlType
  amountPaid: ControlType
  outstandingAmount: ControlType
  paymentStatus: ControlType
  paymentMethod: ControlType
  notes: ControlType
  appointmentId: ControlType
}
