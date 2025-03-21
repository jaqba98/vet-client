import { AuthPostModel } from './post/auth-post.model'
import { ChooseRolePostDtoModel } from './post/controller/choose-role-post-dto.model'
import { HasRolePostModel } from './post/has-role-post.model'
import { IsClientPostModel } from './post/is-client-post.model'
import { IsVetPostModel } from './post/is-vet-post.model'
import { LogoutPostDtoModel } from './post/controller/logout-post-dto.model'
import { LoginPostDtoModel } from './post/controller/login-post-dto.model'
import { RegistrationPostDtoModel } from './post/controller/registration-post-dto.model'
import { MethodEnum } from '../enum/method.enum'
import { GetAccountPostModel } from './post/get-account-post.model'
import {
  ClinicCreatePostModel,
  ClinicDeletePostModel,
  ClinicReadPostModel,
  ClinicUpdatePostModel,
} from './post/controller/clinic-post.model'

type HttpPostType =
  | AuthPostModel
  | ChooseRolePostDtoModel
  | HasRolePostModel
  | IsClientPostModel
  | IsVetPostModel
  | LoginPostDtoModel
  | LogoutPostDtoModel
  | RegistrationPostDtoModel
  | GetAccountPostModel
  | ClinicCreatePostModel
  | ClinicReadPostModel
  | ClinicUpdatePostModel
  | ClinicDeletePostModel

interface HttpModel {
  method: MethodEnum.post
  type: HttpPostType
}

export type HttpType = HttpModel
