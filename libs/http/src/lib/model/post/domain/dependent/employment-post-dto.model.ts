import { DeleteRequestModel, EmploymentRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentCreate, EmploymentRequestModel>

export type ReadEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentRead, TokenRequestModel>

export type UpdateEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentUpdate, EmploymentRequestModel>

export type DeleteEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentDelete, DeleteRequestModel>
