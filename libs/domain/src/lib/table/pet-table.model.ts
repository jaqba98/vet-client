import { PetDomainModel } from '../domain/pet-domain.model'

export interface PetTableModel {
  id: number
  isSelected: boolean
  domain: PetDomainModel
}
