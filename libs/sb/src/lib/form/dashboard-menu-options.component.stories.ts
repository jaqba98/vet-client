// done
import type { Meta, StoryObj } from '@storybook/angular';

import { DashboardMenuOptionsFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<DashboardMenuOptionsFormComponent> = {
  component: DashboardMenuOptionsFormComponent,
  title: 'Form/DashboardMenuOptions',
  ...StorybookUtilsService.getFormConfiguration()
};
export default meta;
type Story = StoryObj<DashboardMenuOptionsFormComponent>;

export const Default: Story = {};

export const FlexDirectionColumn: Story = {
  args: {
    flexDirectionColumn: true
  }
};
