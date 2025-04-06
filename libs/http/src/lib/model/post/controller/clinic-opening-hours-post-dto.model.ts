import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { ClinicOpeningHoursRequestDtoModel } from '../../request/controller/clinic-opening-hours-request-dto.model'

export type ReadClinicOpeningHoursPostDtoModel = BaseEndpointModel<EndpointEnum.openingHourRead, TokenRequestDtoModel>

export type UpdateClinicOpeningHoursPostDtoModel = BaseEndpointModel<EndpointEnum.openingHourUpdate, ClinicOpeningHoursRequestDtoModel>
