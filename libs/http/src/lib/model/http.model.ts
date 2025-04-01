import { ChooseRolePostDtoModel } from './post/controller/choose-role-post-dto.model'
import {
  CreateClinicPostDtoModel,
  DeleteClinicPostDtoModel,
  ReadClinicPostDtoModel,
  UpdateClinicPostDtoModel,
} from './post/controller/clinic-post-dto.model'
import { LoginPostDtoModel } from './post/controller/login-post-dto.model'
import { LogoutPostDtoModel } from './post/controller/logout-post-dto.model'
import { RegistrationPostDtoModel } from './post/controller/registration-post-dto.model'
import {
  GetAccountPostDtoModel,
  HasRolePostDtoModel,
  ValidTokenPostDtoModel,
} from './post/guard/guard-post-dto.model'
import { MethodEnum } from '../enum/method.enum'
import {
  CreateServicePostDtoModel,
  DeleteServicePostDtoModel,
  ReadServicePostDtoModel,
  UpdateServicePostDtoModel,
} from './post/controller/service-post-dto.model'
import {
  ReadClinicOpeningHoursPostDtoModel,
  UpdateClinicOpeningHoursPostDtoModel,
} from './post/controller/clinic-opening-hours-post-dto.model'
import {
  CreateEmploymentPostDtoModel,
  DeleteEmploymentPostDtoModel,
  ReadEmploymentPostDtoModel,
  UpdateEmploymentPostDtoModel,
} from './post/controller/employment-post-dto.model'
import {
  CreateMedicationPostDtoModel, DeleteMedicationPostDtoModel,
  ReadMedicationPostDtoModel,
  UpdateMedicationPostDtoModel,
} from './post/controller/medication-post-dto.model'
import {
  CreateClientPostDtoModel, DeleteClientPostDtoModel,
  ReadClientPostDtoModel,
  UpdateClientPostDtoModel,
} from './post/controller/client-post-dto.model'
import {
  CreatePetPostDtoModel, DeletePetPostDtoModel,
  ReadPetPostDtoModel,
  UpdatePetPostDtoModel,
} from './post/controller/pet-post-dto.model'
import {
  CreateAppointmentPostDtoModel, DeleteAppointmentPostDtoModel,
  ReadAppointmentPostDtoModel, UpdateAppointmentPostDtoModel,
} from './post/controller/appointment-post-dto.model'
import {
  CreateInvoicePostDtoModel, DeleteInvoicePostDtoModel,
  ReadInvoicePostDtoModel,
  UpdateInvoicePostDtoModel,
} from './post/controller/invoice-post-dto.model'

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
  | CreateServicePostDtoModel
  | ReadServicePostDtoModel
  | UpdateServicePostDtoModel
  | DeleteServicePostDtoModel
  | ReadClinicOpeningHoursPostDtoModel
  | UpdateClinicOpeningHoursPostDtoModel
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

interface HttpModel {
  method: MethodEnum.post
  type: HttpPostType
}

export type HttpType = HttpModel
