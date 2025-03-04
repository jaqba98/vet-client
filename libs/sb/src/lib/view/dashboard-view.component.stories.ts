import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<DashboardViewComponent> = {
  component: DashboardViewComponent,
  title: 'View/Dashboard',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<DashboardViewComponent>;

export const Default: Story = {};
