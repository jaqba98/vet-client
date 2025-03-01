// done
import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardNavMenuFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<DashboardNavMenuFormComponent> = {
  component: DashboardNavMenuFormComponent,
  title: 'Form/DashboardNavMenu',
  ...StorybookUtilsService.getFormConfiguration()
};
export default meta;
type Story = StoryObj<DashboardNavMenuFormComponent>;

export const Default: Story = {};

export const IsHorizontal: Story = {
  args: {
    isHorizontal: true
  }
};
