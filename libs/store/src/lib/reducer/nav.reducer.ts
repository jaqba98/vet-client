import { createReducer, on } from '@ngrx/store';

import { NavStoreModel } from '../model/nav-store.model';
import { navSwitchIsOpen } from '../actions/nav.action';

export const initialState: NavStoreModel = {
  isOpen: false
};

export const navReducer = createReducer(
  initialState,
  on(navSwitchIsOpen, (state: NavStoreModel, payload) => ({
    ...state,
    isOpen: payload.isOpen
  }))
);
