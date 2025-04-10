import { ServiceClinicDomainModel } from '../../domain/dependent/service-clinic-domain.model'

export interface ServiceClinicTableModel {
  id: number
  isSelected: boolean
  domain: ServiceClinicDomainModel
}
