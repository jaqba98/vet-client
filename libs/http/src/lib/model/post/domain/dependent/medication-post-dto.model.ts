import { DeleteRequestModel, MedicationRequestModel, TokenRequestModel } from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationCreate, MedicationRequestModel>

export type ReadMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationRead, TokenRequestModel>

export type UpdateMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationUpdate, MedicationRequestModel>

export type DeleteMedicationPostDtoModel = BaseEndpointModel<EndpointEnum.medicationDelete, DeleteRequestModel>
