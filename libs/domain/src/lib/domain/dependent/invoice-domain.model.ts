import { BaseDomainModel } from '../base/base-domain.model'

export interface InvoiceDomainModel extends BaseDomainModel {
  invoiceDate: string
  dueDate: string
  totalAmount: number
  amountPaid: number
  outstandingAmount: number
  paymentStatus: string
  paymentMethod: string
  notes: string
  appointmentId: number
}
