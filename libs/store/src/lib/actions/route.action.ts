import { createAction, props } from '@ngrx/store'

import { RouteStoreModel } from '../model/route-store.model'

export const routeSetAction = createAction('[Route] Set Route', props<RouteStoreModel>())
