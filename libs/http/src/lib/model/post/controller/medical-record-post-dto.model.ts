import { BaseEndpointModel } from '../../base/base-endpoint.model'
import { EndpointEnum } from '../../../enum/endpoint.enum'
import { DeleteRequestDtoModel } from '../../request/crud/delete-request-dto.model'
import { TokenRequestDtoModel } from '../../base/token-request-dto.model'
import { MedicalRecordRequestDtoModel } from '../../request/controller/medical-record-request-dto.model'

export type CreateMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordCreate, MedicalRecordRequestDtoModel>

export type ReadMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordRead, TokenRequestDtoModel>

export type UpdateMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordUpdate, MedicalRecordRequestDtoModel>

export type DeleteMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordDelete, DeleteRequestDtoModel>
