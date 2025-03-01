import { EndpointEnum } from '../../enum/endpoint.enum';
import { BaseEndpointModel } from '../base/base-endpoint.model';
import { RegistrationRequestModel } from '../request/registration-request.model';

export type RegistrationPostModel = BaseEndpointModel<EndpointEnum.registration, RegistrationRequestModel>;
