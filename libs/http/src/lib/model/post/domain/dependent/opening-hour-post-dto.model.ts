import { OpeningHourRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type ReadOpeningHourPostDtoModel = BaseEndpointModel<EndpointEnum.openingHourRead, TokenRequestModel>

export type UpdateOpeningHourPostDtoModel = BaseEndpointModel<EndpointEnum.openingHourUpdate, OpeningHourRequestModel>
