export interface BaseFormControlModel {
  name: string;
}

export interface BaseFormModel {
  controls: BaseFormControlModel[];
  submit: string;
}
