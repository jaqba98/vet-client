import { createAction, props } from '@ngrx/store';

import { NavStoreModel } from '../model/nav-store.model';

export const navSwitchIsOpen = createAction('[Nav] Switch Is Open', props<NavStoreModel>());
