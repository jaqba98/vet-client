import type { Meta, StoryObj } from '@storybook/angular';

import { ProfileViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ProfileViewComponent> = {
  component: ProfileViewComponent,
  title: 'View/Profile',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ProfileViewComponent>;

export const Default: Story = {};
