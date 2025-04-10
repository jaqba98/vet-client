import { TokenRequestModel } from '../base/token-request.model'
import { MedicalRecordDomainModel } from '../../../domain/dependent/medical-record-domain.model'

export interface MedicalRecordRequestModel extends TokenRequestModel, MedicalRecordDomainModel {
}
