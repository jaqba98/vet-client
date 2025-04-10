import { TokenRequestModel } from '../base/token-request.model'
import { OpeningHourDomainModel } from '../../../domain/dependent/opening-hour-domain.model'

export interface OpeningHourRequestModel extends TokenRequestModel, OpeningHourDomainModel {
}
