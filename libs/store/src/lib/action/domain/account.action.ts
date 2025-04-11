import { createAction, props } from '@ngrx/store'

import { GetAccountDataModel } from '@vet-client/lib-domain'

export const accountSetAction = createAction('[account] set account', props<GetAccountDataModel>())
