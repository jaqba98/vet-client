import { PetDomainModel } from '../../domain/dependent/pet-domain.model'

export interface PetTableModel {
  id: number
  isSelected: boolean
  domain: PetDomainModel
}
