export interface LoginPostHttpRequestModel {
  email: string;
  password: string;
}

export interface RegistrationPostHttpRequestModel {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface AuthPostHttpRequestModel {
  token: string | null;
}

export interface LogoutPostHttpRequestModel {
  logout: boolean;
}

export interface HasRolePostHttpRequestModel {
  token: string | null;
}

export interface ChooseRolePostHttpRequestModel {
  token: string | null;
  role: string;
}

export interface IsVetPostHttpRequestModel {
  token: string | null;
}

export interface IsClientPostHttpRequestModel {
  token: string | null;
}
