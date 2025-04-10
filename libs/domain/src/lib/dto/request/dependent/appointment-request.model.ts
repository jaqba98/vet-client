import { AppointmentDomainModel } from '../../../domain/dependent/appointment-domain.model'
import { TokenRequestModel } from '../base/token-request.model'

export interface AppointmentRequestModel extends TokenRequestModel, AppointmentDomainModel {}
