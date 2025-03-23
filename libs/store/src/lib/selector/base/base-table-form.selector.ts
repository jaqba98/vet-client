import { BaseTableFormStoreModel } from '@vet-client/lib-store';
import { createSelector } from '@ngrx/store';

export const baseTableFormSelector = <TRow>(state: BaseTableFormStoreModel<TRow>) => {
  return {
    selectRows: createSelector(() => state, domain => domain.rows),
    selectPage: createSelector(() => state, domain => domain.page),
    selectMaxPage: createSelector(() => state, domain => domain.maxPage)
  }
}
