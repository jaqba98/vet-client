import { createReducer, on } from '@ngrx/store'

import { RoutePageEnum, RouteSectionEnum } from '../../enum/route.enum'
import { RouteStoreModel } from '../../model/common/route-store.model'
import { routeSetAction } from '../../action/common/route.action'

export const initialRoute: RouteStoreModel = {
  page: RoutePageEnum.empty,
  section: RouteSectionEnum.empty,
}

export const routeReducer = createReducer(
  initialRoute,
  on(routeSetAction, (state: RouteStoreModel, { page, section }) => ({ ...state, page, section })),
)
