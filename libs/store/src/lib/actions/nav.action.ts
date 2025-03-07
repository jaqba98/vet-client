import { createAction, props } from '@ngrx/store'

import { NavDashboardNavIsOpen, NavIsOpenStoreType, NavMenuTypeStoreType } from '../type/nav-store.type'

export const navSwitchIsOpen = createAction('[Nav] Switch Is Open', props<NavIsOpenStoreType>())

export const navSetMenuType = createAction('[Nav] Set Menu Type', props<NavMenuTypeStoreType>())

export const navDashboardNavIsOpen = createAction('[Nav] Dashboard Nav Is Open', props<NavDashboardNavIsOpen>())
