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
