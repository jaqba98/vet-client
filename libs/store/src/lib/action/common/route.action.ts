import { createAction, props } from '@ngrx/store'

import { RouteStoreModel } from '../../model/common/route-store.model'

export const routeSetAction = createAction('[route] set route', props<RouteStoreModel>())
