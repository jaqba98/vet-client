import {
  DeleteRequestModel,
  MedicalRecordRequestModel,
  TokenRequestModel,
} from '@vet-client/lib-domain'
import { BaseEndpointModel } from '../../../base/base-endpoint.model'
import { EndpointEnum } from '../../../../enum/endpoint.enum'

export type CreateMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordCreate, MedicalRecordRequestModel>

export type ReadMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordRead, TokenRequestModel>

export type UpdateMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordUpdate, MedicalRecordRequestModel>

export type DeleteMedicalRecordPostDtoModel = BaseEndpointModel<EndpointEnum.medicalRecordDelete, DeleteRequestModel>
