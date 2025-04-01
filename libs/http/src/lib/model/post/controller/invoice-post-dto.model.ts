import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { InvoiceRequestDtoModel } from '../../request/controller/invoice-request-dto.model'

export type CreateInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceCreate, InvoiceRequestDtoModel>

export type ReadInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceRead, TokenRequestDtoModel>

export type UpdateInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceUpdate, InvoiceRequestDtoModel>

export type DeleteInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceDelete, DeleteRequestDtoModel>
