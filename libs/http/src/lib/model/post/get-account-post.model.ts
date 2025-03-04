import { EndpointEnum } from '../../enum/endpoint.enum';
import { BaseEndpointModel } from '../base/base-endpoint.model';
import { GetAccountRequestModel } from '../request/get-account-request.model';

export type GetAccountPostModel = BaseEndpointModel<EndpointEnum.getAccount, GetAccountRequestModel>;
