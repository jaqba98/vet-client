import type { Meta, StoryObj } from '@storybook/angular';

import { NavViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<NavViewComponent> = {
  component: NavViewComponent,
  title: 'View/Nav',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<NavViewComponent>;

export const Default: Story = {};
