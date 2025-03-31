import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { MedicationRequestDtoModel } from '../../request/controller/medication-request-dto.model'

export type CreateMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationCreate, MedicationRequestDtoModel>

export type ReadMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationRead, TokenRequestDtoModel>

export type UpdateMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationUpdate, MedicationRequestDtoModel>

export type DeleteMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationDelete, DeleteRequestDtoModel>
