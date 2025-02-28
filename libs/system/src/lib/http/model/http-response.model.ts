export interface LoginPostHttpResponseModel {
  success: boolean;
  token: string;
}

export interface RegistrationPostHttpResponseModel {
  success: boolean;
  errors: string[];
}

export interface AuthPostHttpResponseModel {
  isAuth: boolean;
}

export interface LogoutPostHttpResponseModel {
  logout: boolean;
}
