export interface InvoiceDatabaseModel {
  id: number
  isArchived: boolean
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
