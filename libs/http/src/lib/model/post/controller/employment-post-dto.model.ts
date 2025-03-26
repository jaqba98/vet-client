import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { EmploymentRequestDtoModel } from '../../request/controller/employment-request-dto.model'

export type CreateEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentCreate, EmploymentRequestDtoModel>

export type ReadEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentRead, TokenRequestDtoModel>

export type UpdateEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentUpdate, EmploymentRequestDtoModel>

export type DeleteEmploymentPostDtoModel = BaseEndpointModel<EndpointEnum.employmentDelete, DeleteRequestDtoModel>
