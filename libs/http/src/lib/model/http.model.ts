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
  IsClientPostDtoModel,
  IsVetPostDtoModel,
  ValidTokenPostDtoModel,
} from './post/guard/guard-post-dto.model'
import { MethodEnum } from '../enum/method.enum'
import {
  CreateServicePostDtoModel,
  DeleteServicePostDtoModel,
  ReadServicePostDtoModel,
  UpdateServicePostDtoModel,
} from './post/controller/service-post-dto.model'

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
  | IsClientPostDtoModel
  | IsVetPostDtoModel
  | ValidTokenPostDtoModel
  | CreateServicePostDtoModel
  | ReadServicePostDtoModel
  | UpdateServicePostDtoModel
  | DeleteServicePostDtoModel

interface HttpModel {
  method: MethodEnum.post
  type: HttpPostType
}

export type HttpType = HttpModel
