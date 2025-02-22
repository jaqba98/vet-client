export interface InputControlModel {
  name: string;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  defaultValue: string;
}
