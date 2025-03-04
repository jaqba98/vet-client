import { createReducer, on } from '@ngrx/store';

import { AccountStoreModel } from '../model/account-store.model';
import { setAccount } from '../actions/account.action';

export const initialAccount: AccountStoreModel = {
  firstName: '',
  lastName: ''
};

export const accountReducer = createReducer(
  initialAccount,
  on(setAccount, (state: AccountStoreModel, { firstName, lastName }) => ({ ...state, firstName, lastName }))
);
