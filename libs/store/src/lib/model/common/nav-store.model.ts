import { MenuTypeEnum } from '../../enum/menu-type.enum'

export interface NavStoreModel {
  isOpen: boolean
  menuType: MenuTypeEnum
  dashboardNavIsOpen: boolean
}
