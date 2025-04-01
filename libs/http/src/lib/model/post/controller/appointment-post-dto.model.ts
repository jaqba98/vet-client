import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { AppointmentRequestDtoModel } from '../../request/controller/appointment-request-dto.model'

export type CreateAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentCreate, AppointmentRequestDtoModel>

export type ReadAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentRead, TokenRequestDtoModel>

export type UpdateAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentUpdate, AppointmentRequestDtoModel>

export type DeleteAppointmentPostDtoModel = BaseEndpointModel<EndpointEnum.appointmentDelete, DeleteRequestDtoModel>
