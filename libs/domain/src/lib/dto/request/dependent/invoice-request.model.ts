import { TokenRequestModel } from '../base/token-request.model'
import { InvoiceDataModel } from '../../data/dependent/invoice-data.model'

export interface InvoiceRequestModel extends TokenRequestModel, InvoiceDataModel {
}
