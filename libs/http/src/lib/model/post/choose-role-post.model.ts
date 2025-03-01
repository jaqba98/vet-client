import { EndpointEnum } from '../../enum/endpoint.enum';
import { BaseEndpointModel } from '../base/base-endpoint.model';
import { ChooseRoleRequestModel } from '../request/choose-role-request.model';

export type ChooseRolePostModel = BaseEndpointModel<EndpointEnum.chooseRole, ChooseRoleRequestModel>;
