import { InvoiceDomainModel } from '@vet-client/lib-domain'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export interface InvoiceRequestDtoModel extends TokenRequestDtoModel, InvoiceDomainModel {
}
