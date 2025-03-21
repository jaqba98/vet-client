import { EndpointEnum } from '../../../enum/endpoint.enum'
import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { ChooseRoleRequestDtoModel } from '../../request/controller/choose-role-request-dto.model'

export type ChooseRolePostDtoModel = BaseEndpointModel<EndpointEnum.chooseRole, ChooseRoleRequestDtoModel>
