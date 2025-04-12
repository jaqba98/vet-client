import { AppointmentRequestModel, DeleteRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentCreate, AppointmentRequestModel>

export type ReadAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentRead, TokenRequestModel>

export type UpdateAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentUpdate, AppointmentRequestModel>

export type DeleteAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentDelete, DeleteRequestModel>
