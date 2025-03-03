import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../utils/storybook-utils.service';

const meta: Meta<DashboardPageComponent> = {
  component: DashboardPageComponent,
  title: 'Page/Dashboard',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<DashboardPageComponent>;

export const Default: Story = {};
