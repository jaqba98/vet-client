import { ClientDomainModel } from '../../domain/dependent/client-domain.model'

export interface ClientTableModel {
  id: number
  isSelected: boolean
  domain: ClientDomainModel
}
