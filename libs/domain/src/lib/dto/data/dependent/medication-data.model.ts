import { MedicationDomainModel } from '../../../domain/dependent/medication-domain.model'

export interface MedicationDataModel {
  medications: MedicationDomainModel[]
}
