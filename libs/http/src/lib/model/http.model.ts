import {
  CreateClinicPostDtoModel,
  DeleteClinicPostDtoModel,
  ReadClinicPostDtoModel,
  UpdateClinicPostDtoModel,
} from './post/domain/independent/clinic-post-dto.model'
import { ChooseRolePostDtoModel } from './post/domain/logic/choose-role-post-dto.model'
import { LoginPostDtoModel } from './post/domain/logic/login-post-dto.model'
import { LogoutPostDtoModel } from './post/domain/logic/logout-post-dto.model'
import { RegistrationPostDtoModel } from './post/domain/logic/registration-post-dto.model'
import {
  GetAccountPostDtoModel,
  HasRolePostDtoModel,
  ValidTokenPostDtoModel,
} from './post/guard/guard-post-dto.model'
import {
  CreateServiceClinicPostDtoModel,
  DeleteServiceClinicPostDtoModel,
  ReadServiceClinicPostDtoModel,
  UpdateServiceClinicPostDtoModel,
} from './post/domain/dependent/service-clinic-post-dto.model'
import {
  ReadOpeningHourPostDtoModel,
  UpdateOpeningHourPostDtoModel,
} from './post/domain/dependent/opening-hour-post-dto.model'
import {
  CreateEmploymentPostDtoModel,
  DeleteEmploymentPostDtoModel,
  ReadEmploymentPostDtoModel,
  UpdateEmploymentPostDtoModel,
} from './post/domain/dependent/employment-post-dto.model'
import {
  CreateMedicationPostDtoModel,
  DeleteMedicationPostDtoModel,
  ReadMedicationPostDtoModel,
  UpdateMedicationPostDtoModel,
} from './post/domain/dependent/medication-post-dto.model'
import {
  CreateClientPostDtoModel, DeleteClientPostDtoModel,
  ReadClientPostDtoModel,
  UpdateClientPostDtoModel,
} from './post/domain/dependent/client-post-dto.model'
import {
  CreatePetPostDtoModel,
  DeletePetPostDtoModel,
  ReadPetPostDtoModel,
  UpdatePetPostDtoModel,
} from './post/domain/dependent/pet-post-dto.model'
import {
  CreateAppointmentPostDtoModel,
  DeleteAppointmentPostDtoModel,
  ReadAppointmentPostDtoModel,
  UpdateAppointmentPostDtoModel,
} from './post/domain/dependent/appointment-post-dto.model'
import {
  CreateInvoicePostDtoModel, DeleteInvoicePostDtoModel,
  ReadInvoicePostDtoModel,
  UpdateInvoicePostDtoModel,
} from './post/domain/dependent/invoice-post-dto.model'
import {
  CreateMedicalRecordPostDtoModel, DeleteMedicalRecordPostDtoModel,
  ReadMedicalRecordPostDtoModel,
  UpdateMedicalRecordPostDtoModel,
} from './post/domain/dependent/medical-record-post-dto.model'
import { ReadVetPostDtoModel, UpdateVetPostDtoModel } from './post/domain/dependent/vet-post-dto.model'
import { MethodEnum } from '../enum/method.enum'

type HttpPostType =
  | ChooseRolePostDtoModel
  | CreateClinicPostDtoModel
  | ReadClinicPostDtoModel
  | UpdateClinicPostDtoModel
  | DeleteClinicPostDtoModel
  | LoginPostDtoModel
  | LogoutPostDtoModel
  | RegistrationPostDtoModel
  | GetAccountPostDtoModel
  | HasRolePostDtoModel
  | ValidTokenPostDtoModel
  | CreateServiceClinicPostDtoModel
  | ReadServiceClinicPostDtoModel
  | UpdateServiceClinicPostDtoModel
  | DeleteServiceClinicPostDtoModel
  | ReadOpeningHourPostDtoModel
  | UpdateOpeningHourPostDtoModel
  | CreateEmploymentPostDtoModel
  | ReadEmploymentPostDtoModel
  | UpdateEmploymentPostDtoModel
  | DeleteEmploymentPostDtoModel
  | CreateMedicationPostDtoModel
  | ReadMedicationPostDtoModel
  | UpdateMedicationPostDtoModel
  | DeleteMedicationPostDtoModel
  | CreateClientPostDtoModel
  | ReadClientPostDtoModel
  | UpdateClientPostDtoModel
  | DeleteClientPostDtoModel
  | CreatePetPostDtoModel
  | ReadPetPostDtoModel
  | UpdatePetPostDtoModel
  | DeletePetPostDtoModel
  | CreateAppointmentPostDtoModel
  | ReadAppointmentPostDtoModel
  | UpdateAppointmentPostDtoModel
  | DeleteAppointmentPostDtoModel
  | CreateInvoicePostDtoModel
  | ReadInvoicePostDtoModel
  | UpdateInvoicePostDtoModel
  | DeleteInvoicePostDtoModel
  | CreateMedicalRecordPostDtoModel
  | ReadMedicalRecordPostDtoModel
  | UpdateMedicalRecordPostDtoModel
  | DeleteMedicalRecordPostDtoModel
  | ReadVetPostDtoModel
  | UpdateVetPostDtoModel

interface HttpModel {
  method: MethodEnum.post
  type: HttpPostType
}

export type HttpType = HttpModel
