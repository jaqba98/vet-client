import { ServiceDomainModel } from '../domain/service-domain.model'

export interface ServiceTableModel {
  id: number
  isSelected: boolean
  domain: ServiceDomainModel
}
