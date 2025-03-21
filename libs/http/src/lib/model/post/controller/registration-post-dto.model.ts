import { EndpointEnum } from '../../../enum/endpoint.enum'
import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { RegistrationRequestDtoModel } from '../../request/controller/registration-request-dto.model'

export type RegistrationPostDtoModel = BaseEndpointModel<EndpointEnum.registration, RegistrationRequestDtoModel>
