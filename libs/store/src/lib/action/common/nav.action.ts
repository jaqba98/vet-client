import { createAction, props } from '@ngrx/store'

import { NavDashboardNavIsOpen, NavIsOpenStoreType, NavMenuTypeStoreType } from '../../type/common/nav-store.type'

export const navSwitchIsOpen = createAction('[nav] switch is open', props<NavIsOpenStoreType>())

export const navSetMenuType = createAction('[nav] set menu type', props<NavMenuTypeStoreType>())

export const navDashboardNavIsOpen = createAction('[nav] dashboard nav is open', props<NavDashboardNavIsOpen>())
