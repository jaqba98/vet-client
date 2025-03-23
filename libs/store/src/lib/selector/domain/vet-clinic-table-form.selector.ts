import { baseTableFormSelector } from '../base/base-table-form.selector'
import { VetClinicTableFormType } from '../../type/domain/vet-clinic-table-form.type'

export const selectVetClinicTableForm = (state: VetClinicTableFormType) => baseTableFormSelector(state.vetClinicTableForm)
