import { TokenRequestModel } from '../base/token-request.model'
import { InvoiceDomainModel } from '../../../domain/dependent/invoice-domain.model'

export interface InvoiceRequestModel extends TokenRequestModel, InvoiceDomainModel {}
