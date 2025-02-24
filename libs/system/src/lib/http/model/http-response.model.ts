export interface LoginPostHttpResponseModel {
  success: boolean;
}

export interface RegistrationPostHttpResponseModel {
  success: boolean;
  errors: Record<string, string[]>;
}
