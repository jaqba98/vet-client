import { createReducer, on } from '@ngrx/store'

import { NavStoreModel } from '../../model/common/nav-store.model'
import { navDashboardNavIsOpen, navSetMenuType, navSwitchIsOpen } from '../../actions/common/nav.action'
import { MenuTypeEnum } from '../../enum/menu-type.enum'

const initialState: NavStoreModel = {
  isOpen: false,
  menuType: MenuTypeEnum.home,
  dashboardNavIsOpen: false,
}

export const navReducer = createReducer(
  initialState,
  on(navSwitchIsOpen, (state: NavStoreModel, payload) => ({ ...state, isOpen: payload.isOpen })),
  on(navSetMenuType, (state: NavStoreModel, payload) => ({ ...state, menuType: payload.menuType })),
  on(navDashboardNavIsOpen, (state: NavStoreModel, payload) => ({
    ...state,
    dashboardNavIsOpen: payload.dashboardNavIsOpen,
  })),
)
