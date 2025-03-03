import { createAction, props } from '@ngrx/store';

import { NavIsOpenStoreType, NavMenuTypeStoreType } from '../type/nav-store.type';

export const navSwitchIsOpen = createAction('[Nav] Switch Is Open', props<NavIsOpenStoreType>());

export const navSetMenuType = createAction('[Nav] Set Menu Type', props<NavMenuTypeStoreType>());
