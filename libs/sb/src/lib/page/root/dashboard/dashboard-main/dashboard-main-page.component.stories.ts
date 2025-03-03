import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardMainPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../utils/storybook-utils.service';

const meta: Meta<DashboardMainPageComponent> = {
  component: DashboardMainPageComponent,
  title: 'Page/DashboardMain',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<DashboardMainPageComponent>;

export const Default: Story = {};
