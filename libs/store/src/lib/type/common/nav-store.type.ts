import { NavStoreModel } from '../../model/common/nav-store.model'

export type NavStoreType = { nav: NavStoreModel }

export type NavIsOpenStoreType = { isOpen: NavStoreModel['isOpen'] }

export type NavMenuTypeStoreType = { menuType: NavStoreModel['menuType'] }

export type NavDashboardNavIsOpen = { dashboardNavIsOpen: NavStoreModel['dashboardNavIsOpen'] }
