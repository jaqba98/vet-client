import { EmploymentDomainModel, EmploymentMetadataModel } from '@vet-client/lib-domain'

import { ActionTypeEnum } from '../../../enum/action-type.enum'
import { baseTableFormReducer } from '../../base/base-table-form.reducer'

export const employmentTableFormReducer
  = baseTableFormReducer<EmploymentDomainModel, EmploymentMetadataModel>(ActionTypeEnum.employment)
