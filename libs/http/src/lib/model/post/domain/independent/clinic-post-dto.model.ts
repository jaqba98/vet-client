import { ClinicRequestModel, DeleteRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicCreate, ClinicRequestModel>

export type ReadClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicRead, TokenRequestModel>

export type UpdateClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicUpdate, ClinicRequestModel>

export type DeleteClinicPostDtoModel = BaseEndpointModel<EndpointEnum.clinicDelete, DeleteRequestModel>
