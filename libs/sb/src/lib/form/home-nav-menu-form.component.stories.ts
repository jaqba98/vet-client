// done
import type { Meta, StoryObj } from '@storybook/angular';

import { HomeNavMenuFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<HomeNavMenuFormComponent> = {
  component: HomeNavMenuFormComponent,
  title: 'Form/HomeNavMenu',
  ...StorybookUtilsService.getFormConfiguration()
};
export default meta;
type Story = StoryObj<HomeNavMenuFormComponent>;

export const Default: Story = {};

export const FlexDirectionColumn: Story = {
  args: {
    isHorizontal: true
  }
};
