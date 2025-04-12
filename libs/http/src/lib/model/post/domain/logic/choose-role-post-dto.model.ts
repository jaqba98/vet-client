import { ChooseRoleRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type ChooseRolePostDtoModel = BaseEndpointModel<EndpointEnum.chooseRole, ChooseRoleRequestModel>
