import { createReducer, on } from '@ngrx/store'

import { NavStoreModel } from '../../model/common/nav-store.model'
import { MenuTypeEnum } from '../../enum/menu-type.enum'
import {
  navDashboardNavIsOpen,
  navSetMenuType,
  navSwitchIsOpen,
} from '../../action/common/nav.action'

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
