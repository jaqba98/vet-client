import { createSelector } from '@ngrx/store'

import { ClinicTableFormType } from '../../type/domain/clinic-table-form.type'

export const clinicTableFormSelector = () => {
  const select = (state: ClinicTableFormType) => state.clinicTableForm
  return {
    selectRows: createSelector(select, domain => domain.rows),
    selectPage: createSelector(select, domain => domain.page),
    selectMaxPage: createSelector(select, domain => domain.maxPage),
  }
}
