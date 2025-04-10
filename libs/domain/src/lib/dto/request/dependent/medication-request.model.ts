import { TokenRequestModel } from '../base/token-request.model'
import { MedicationDomainModel } from '../../../domain/dependent/medication-domain.model'

export interface MedicationRequestModel extends TokenRequestModel, MedicationDomainModel {
}
