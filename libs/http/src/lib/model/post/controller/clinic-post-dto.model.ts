import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { ClinicRequestDtoModel } from '../../request/controller/clinic-request-dto.model'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'

export type CreateClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicCreate, ClinicRequestDtoModel>

export type ReadClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicRead, TokenRequestDtoModel>

export type UpdateClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicUpdate, ClinicRequestDtoModel>

export type DeleteClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicDelete, DeleteRequestDtoModel>
