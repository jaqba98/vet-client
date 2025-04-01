import { ClientDomainModel } from '../domain/client-domain.model'

export interface ClientTableModel {
  id: number
  isSelected: boolean
  domain: ClientDomainModel
}
