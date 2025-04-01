import { InvoiceDomainModel } from '../domain/invoice-domain.model'

export interface InvoiceTableModel {
  id: number
  isSelected: boolean
  domain: InvoiceDomainModel
}
