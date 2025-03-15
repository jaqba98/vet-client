import { createSelector } from '@ngrx/store'

import { ClinicDomainDataType } from '../../../type/domain/data/clinic-domain-data-type'

export const selectClinicDomainData = (state: ClinicDomainDataType) => state.clinicDomainData

export const selectClinicDomainDataClinics = createSelector(
  selectClinicDomainData,
  clinicDomainData => clinicDomainData.clinics,
)

export const selectClinicDomainDataPage = createSelector(
  selectClinicDomainData,
  clinicDomainData => clinicDomainData.page,
)

export const selectClinicDomainDataMaxPage = createSelector(
  selectClinicDomainData,
  clinicDomainData => clinicDomainData.maxPage,
)

export const selectClinicDomainDataTab = createSelector(
  selectClinicDomainData,
  clinicDomainData => clinicDomainData.tab,
)
