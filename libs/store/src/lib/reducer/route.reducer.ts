import { createReducer, on } from '@ngrx/store';

import { setRoute } from '../actions/route.action';
import { RouteStoreModel } from '../model/route-store.model';
import { RoutePageEnum, RouteSectionEnum } from '../enum/route.enum';

export const initialRoute: RouteStoreModel = {
  page: RoutePageEnum.empty,
  section: RouteSectionEnum.empty
};

export const routeReducer = createReducer(
  initialRoute,
  on(setRoute, (state: RouteStoreModel, { page, section }) => ({ ...state, page, section }))
);
