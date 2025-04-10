import { InvoiceDomainModel } from '../../domain/dependent/invoice-domain.model'

export interface InvoiceTableModel {
  id: number
  isSelected: boolean
  domain: InvoiceDomainModel
}
