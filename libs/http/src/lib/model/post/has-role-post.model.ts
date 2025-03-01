import { EndpointEnum } from '../../enum/endpoint.enum';
import { BaseEndpointModel } from '../base/base-endpoint.model';
import { HasRoleRequestModel } from '../request/has-role-request.model';

export type HasRolePostModel = BaseEndpointModel<EndpointEnum.hasRole, HasRoleRequestModel>;
