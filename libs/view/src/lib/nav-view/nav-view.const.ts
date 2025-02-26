import { NavViewModel } from './nav-view.model';

export const NAV_VIEW_OUTSIDE: NavViewModel = {
  options: [
    {
      id: 'outside_1',
      type: 'button',
      value: { type: 'text', text: 'Outside 1' }
    },
    {
      id: 'outside_2',
      type: 'button',
      value: { type: 'text', text: 'Outside 2' }
    },
    {
      id: 'outside_3',
      type: 'button',
      value: { type: 'text', text: 'Outside 3' }
    },
  ],
};

export const NAV_VIEW_DASHBOARD: NavViewModel = {
  options: [
    {
      id: 'dashboard_1',
      type: 'button',
      value: { type: 'text', text: 'Dashboard 1' }
    },
    {
      id: 'dashboard_2',
      type: 'button',
      value: { type: 'text', text: 'Dashboard 2' }
    },
    {
      id: 'dashboard_3',
      type: 'button',
      value: { type: 'text', text: 'Dashboard 3' }
    },
  ]
};
