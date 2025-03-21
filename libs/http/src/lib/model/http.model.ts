import { AuthPostModel } from './post/auth-post.model'
import { ChooseRolePostDtoModel } from './post/controller/choose-role-post-dto.model'
import { HasRolePostModel } from './post/has-role-post.model'
import { IsClientPostModel } from './post/is-client-post.model'
import { IsVetPostModel } from './post/is-vet-post.model'
import { LogoutPostModel } from './post/logout-post.model'
import { LoginPostModel } from './post/login-post.model'
import { RegistrationPostModel } from './post/registration-post.model'
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
  | LoginPostModel
  | LogoutPostModel
  | RegistrationPostModel
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
