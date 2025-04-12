import { DeleteRequestModel, InvoiceRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceCreate, InvoiceRequestModel>

export type ReadInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceRead, TokenRequestModel>

export type UpdateInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceUpdate, InvoiceRequestModel>

export type DeleteInvoicePostDtoModel = BaseEndpointModel<EndpointEnum.invoiceDelete, DeleteRequestModel>
