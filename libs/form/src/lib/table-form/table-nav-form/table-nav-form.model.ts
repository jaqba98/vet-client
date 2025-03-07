import { ControlType } from '@vet-client/lib-base-form';

export interface TableNavFormModel {
  add: ControlType;
  remove: ControlType;
  refresh: ControlType;
  search: ControlType;
}

export interface TableNavModel {
  add: boolean;
  remove: boolean;
  refresh: boolean;
  search: boolean;
}
