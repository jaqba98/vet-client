import { InvoiceDomainModel } from '../../../domain/dependent/invoice-domain.model'

export interface InvoiceDataModel {
  invoices: InvoiceDomainModel[]
}
