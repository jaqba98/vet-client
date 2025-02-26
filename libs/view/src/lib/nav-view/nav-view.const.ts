import { ButtonValueTypeEnum } from '@vet-client/lib-control';
import { NavViewModel } from './nav-view.model';

export const NAV_VIEW_OUTSIDE: NavViewModel = {
  options: [
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Outside 1' }
    },
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Outside 2' }
    },
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Outside 3' }
    },
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Outside 4' }
    },
  ],
};

export const NAV_VIEW_DASHBOARD: NavViewModel = {
  options: [
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Dashboard 1' }
    },
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Dashboard 2' }
    },
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Dashboard 3' }
    },
    {
      type: 'button',
      value: { valueType: ButtonValueTypeEnum.text, text: 'Dashboard 4' }
    },
  ]
};
